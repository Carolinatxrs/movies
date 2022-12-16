const express = require('express');

const router = express.Router();

router.get('/', (request, response) => response.status(200).send('Router show'));

module.exports = router;