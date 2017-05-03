const express = require('express');
const router = express.Router();

/**
 * @api {get} / status
 * @apiName /status
 *
 * @apiSuccess {String} status ok message
 */
router.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;
