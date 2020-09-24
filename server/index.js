require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});
const userId = 5;

app.get('/api/visits', (req, res, next) => {
  const sql = `
    select
      "visits"."visitId",
      "visits"."date",
      "visits"."city",
      "visits"."state",
      json_object_agg("diseases"."name", "visitResults"."result") as "diseases"
      from "visits"
      join "users" using ("userId")
      join "visitResults" using ("visitId")
      join "diseases" using ("diseaseId")
      where "userId" = $1
      group by "visitId"
      order by "date" desc;
  `;
  const params = [userId];
  db.query(sql, params)
    .then(result => {
      const visits = result.rows;
      visits.forEach(visit => {
        const diseasesArr = Object.keys(visit.diseases).map(i => ({
          [i]: visit.diseases[i]
        }));
        visit.diseases = diseasesArr;
      });
      res.json(visits);
    })
    .catch(err => next(err));
});

app.get('/api/visits/:visitId', (req, res, next) => {
  const visitId = parseFloat(req.params.visitId);
  if (!Number.isInteger(visitId) || visitId <= 0) {
    return res.status(400).json({
      error: 'visitId must be a positive integer'
    });
  }
  const sql = `
    select
      "visits"."visitId",
      "visits"."date",
      "visits"."city",
      "visits"."state",
      json_object_agg("diseases"."name", "visitResults"."result") as "diseases"
      from "visits"
      join "users" using ("userId")
      join "visitResults" using ("visitId")
      join "diseases" using ("diseaseId")
      where "userId" = $1 and "visitId" = $2
      group by "visitId";
  `;
  const params = [userId, visitId];
  db.query(sql, params)
    .then(result => {
      const resultObj = result.rows[0];
      if (!resultObj) {
        res.status(404).json({
          error: `Cannot find visit with visitId ${visitId}`
        });
      } else {
        const diseasesArr = Object.keys(resultObj.diseases).map(i => ({
          [i]: resultObj.diseases[i]
        }));
        for (let i = 0; i < diseasesArr.length; i++) {
          const diseaseName = Object.keys(diseasesArr[i]).map(obj => [obj]);
          let result = '';
          switch (diseasesArr[i][diseaseName]) {
            case true:
              result = 'Positive';
              break;
            case false:
              result = 'Negative';
              break;
          }
          diseasesArr[i][diseaseName] = result;
        }
        resultObj.diseases = diseasesArr;
        res.json(resultObj);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/visits', (req, res, next) => {
  const body = req.body;
  if (Object.keys(body).length === 0) {
    res.status(400).json({
      error: 'content is a required field'
    });
  } else if (!('date' in body) || (body.date === '') || !('city' in body) || !('state' in body) || !('diseases' in body)) {
    res.status(400).json({
      error: 'content expected: date=date, city=text or "" or null, state=text or "" or null, diseases=[{}] with at least one disease obj'
    });
  } else if (!Array.isArray(body.diseases)) {
    res.status(400).json({
      error: 'diseases=[{}] with at least one disease obj'
    });
  }
  for (let i = 0; i < body.diseases.length; i++) {
    for (const prop in body.diseases[i]) {
      if (body.diseases[i][prop] === 'N/A') {
        body.diseases.splice(i, 1);
      }
    }
  }
  let valuesConcat = '';
  for (let i = 0; i < body.diseases.length; i++) {
    const diseaseName = Object.keys(body.diseases[i]).map(obj => [obj]);
    let result = '';
    switch (body.diseases[i][diseaseName]) {
      case 'Positive':
        result = true;
        break;
      case 'Negative':
        result = false;
        break;
    }
    let diseaseId = '';
    switch (diseaseName[0][0]) {
      case 'chlamydia':
        diseaseId = 1;
        break;
      case 'gonorrhea':
        diseaseId = 2;
        break;
      case 'hepatitis':
        diseaseId = 3;
        break;
      case 'herpes':
        diseaseId = 4;
        break;
      case 'hiv':
        diseaseId = 5;
        break;
      case 'hpv':
        diseaseId = 6;
        break;
      case 'syphilis':
        diseaseId = 7;
        break;
    }
    valuesConcat += `((select "visitId" from add_visit), ${diseaseId}, ${result}), `;
  }
  const values = valuesConcat.slice(0, -2);
  const sql = `
    with add_visit as (
      insert into "visits" ("userId", "date", "city", "state")
      values ($1, $2, $3, $4)
      returning "visitId"
    )
    insert into "visitResults" ("visitId", "diseaseId", "result")
    values ${values}
    returning *;
  `;
  const params = [userId, body.date, body.city, body.state];
  db.query(sql, params)
    .then(result => {
      const visitId = result.rows[0].visitId;
      const sql = `
      select
        "visits"."visitId",
        "visits"."date",
        "visits"."city",
        "visits"."state",
        json_object_agg("diseases"."name", "visitResults"."result") as "diseases"
        from "visits"
        join "users" using ("userId")
        join "visitResults" using ("visitId")
        join "diseases" using ("diseaseId")
        where "userId" = $1 and "visitId" = $2
        group by "visitId";
      `;
      const params = [userId, visitId];
      db.query(sql, params)
        .then(result => {
          const resultObj = result.rows[0];
          const diseasesArr = Object.keys(resultObj.diseases).map(i => ({
            [i]: resultObj.diseases[i]
          }));
          for (let i = 0; i < diseasesArr.length; i++) {
            const diseaseName = Object.keys(diseasesArr[i]).map(obj => [obj]);
            let result = '';
            switch (diseasesArr[i][diseaseName]) {
              case true:
                result = 'Positive';
                break;
              case false:
                result = 'Negative';
                break;
            }
            diseasesArr[i][diseaseName] = result;
          }
          resultObj.diseases = diseasesArr;
          res.status(201).json(resultObj);
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/visits/:visitId', (req, res, next) => {
  const visitId = parseFloat(req.params.visitId);
  if (!Number.isInteger(visitId) || visitId <= 0) {
    return res.status(400).json({
      error: 'visitId must be a positive integer'
    });
  }
  const sql = `
    delete from "visitResults"
      where "visitId" = $1;
  `;
  const params = [visitId];
  db.query(sql, params)
    .then(result => {
      if (!result.rowCount) {
        res.status(404).json({
          error: `Cannot find visit with visitId ${visitId}`
        });
      } else {
        const sql = `
          delete from "visits"
            where "visitId" = $1;
        `;
        const params = [visitId];
        db.query(sql, params)
          .then(result => {
            res.sendStatus(204);
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/partners', (req, res, next) => {
  const sql = `
    select
      "partnerId",
      "date",
      "city",
      "state",
      "name"
      from "partners"
      order by "date" desc;
  `;
  db.query(sql)
    .then(result => {
      return res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/partners', (req, res, next) => {
  const body = req.body;
  if (body.date && body.name) {
    const sql = `
    insert into "partners" ("userId", "date", "city", "state", "name")
    values ($1, $2, $3, $4, $5)
    returning *
  `;
    const params = [userId, body.date, body.city, body.state, body.name];
    db.query(sql, params)
      .then(result => {
        return res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({
          error: 'An unexpected error occured.'
        });
      });
  } else {
    return res.status(400).json({
      error: 'content is a required field'
    });
  }
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
