const express = require('express');
const router = express.Router();

const date = require('./date');

/**
 * @api {get} / status
 * @apiName status
 * @apiGroup Index
 *
 * @apiSuccess {String} status ok message
 */
router.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/date', date);

module.exports = router;
