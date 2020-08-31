const express = require('express');
const authenticationMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authenticationMiddleware);

router.get('/', (req, res) => {
    res.send({ Ok: true });
});

module.exports = app => app.use('/project', router);