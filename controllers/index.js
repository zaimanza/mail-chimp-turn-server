var router = require('express').Router();

// split up route handling
router.use('/', require('./members.controller'))
router.use('/', require('./ping.controller'))

module.exports = router;