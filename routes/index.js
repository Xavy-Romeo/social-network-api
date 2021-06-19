const router = require('express').Router();

// import api routes from /api/index.js
const apiRoutes = require('./api');

// add prefix of `/api` to all api routes imported from `api` directory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error! The route you are trying to get does not exist!</h1>')
});

module.exports = router;