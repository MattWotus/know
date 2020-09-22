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
      group by "visitId";
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
  const visitId = parseFloat(req.params.visitId, 10);
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

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
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
