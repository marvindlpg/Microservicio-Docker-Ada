const router = require('express').Router();
const apiGreetingsRouter = require('./api/greetings');

router.use('/greetings',apiGreetingsRouter);

module.exports = router;