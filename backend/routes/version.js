const express = require('express');
const router = express.Router();


/* GET programming languages. */
router.get('/', async function(req, res, next) {
    try {
        res.json({'version':'1.0.0'});
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;