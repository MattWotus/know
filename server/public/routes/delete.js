let express = require('express'),
path = require('path'),
fs = require('fs'),

app = module.exports = express();

const db = require('../../database');

app.delete('/api/visits/:visitId', (req, res, next) => {
  const visitId = parseFloat(req.params.visitId);
  if (!Number.isInteger(visitId) || visitId <= 0) {
    return res.status(400).json({
      error: 'visitId must be a positive integer'
    });
  }

  const sql = `
    DELETE FROM "visitResults" USING "visits"
    WHERE "visitResults"."visitId" = "visits"."visitId" AND "visits"."visitId" = $1
  `;
  const params = [visitId];
  db.query(sql, params)
    .then(result => {
      if (!result.rowCount) {
        res.status(404).json({
          error: `Cannot find visit with visitId ${visitId}`
        });
      } else {
        res.sendStatus(204)
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
