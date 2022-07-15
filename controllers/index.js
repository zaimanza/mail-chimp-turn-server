var router = require('express').Router();

// split up route handling
router.use('/', require('./members.controller'))

module.exports = router;