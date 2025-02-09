const router = require('express').Router();
const {check,validationResult} = require('express-validator');
const { body } = require('express-validator');
const { Greeting } = require('../../db');

router.get('/', async (req, res) => {
    //const greetings = await Greeting.findAll();
    const greetings = "Hello From";
    res.json(greetings);
});

module.exports = router;