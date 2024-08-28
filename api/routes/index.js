require('dotenv').config();
var express = require('express');
var router = express.Router();

let randomNumber;

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* POST start_game method that generates random number and returns it. */
router.post('/start_game', function (req, res) {
    const min = Number(process.env.MIN);
    const max = Number(process.env.MAX);

    randomNumber = generateRandomNumber(min, max);

    return res.json({min, max})
});

router.post('/guess', function (req, res, next) {
    const guess = req.body.guess;
    let message = '';
    let isGuessed = false;

    if (!randomNumber) {
        return res.status(400).json({message: 'Game has not started yet!'});
    }

    // Validate input
    if (typeof guess !== 'number') {
        const error = new Error(`Invalid input: 'guess' must be provided as number, got ${typeof guess} instead!`);
        error.status = 400;
        return next(error);
    }

    if (guess > randomNumber) {
        message = '📈 Too high!'
    } else if (guess < randomNumber) {
        message = '📉 Too low!'
    } else {
        message = '🎉 Correct Number!';
        isGuessed = true;
    }

    return res.json({message, isGuessed});
});

module.exports = router;
