var express = require('express');
var router = express.Router();

var date = require('../date/date');

/**
 * @api {post} /date/format Format date
 * @apiName FormatDate
 * @apiGroup Date
 *
 * @apiParam {String} date Date to be formatted.
 * @apiParamExample {json} Request:
 *  {
 *    "date": "11031995"
 *  }
 *
 * @apiSuccess {String} date Formatted Date.
 * @apiSuccessExample {json} Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "date": "11-03-1995"
 *  }
 */
router.post('/format', (req, res) => {
  var formatted = date.formatDate(req.body.date);
  return res.json({ date: formatted });
});

/**
 * @api {post} /date/isValid Validate date
 * @apiName ValidateDate
 * @apiGroup Date
 *
 * @apiParam {String} date2 Date to be validated.
 * @apiParamExample {json} Request:
 *  {
 *    "date2": "11-03-1995"
 *  }
 *
 * @apiSuccess {Boolean} valid True if valid date, else false.
 * @apiSuccessExample {json} Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "valid": true
 *  }
 */
router.post('/isValid', (req, res) => {
  var isValid = date.isValidDate(req.body.date2);
  return res.json({ valid: isValid });
});

module.exports = router;
