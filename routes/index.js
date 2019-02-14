const app = module.exports = require('express')();

app.use('/api', require('./base.route'));

// the catch all route
app.all('*', (req, res) => {
    res.status(404).send({msg: 'not found'});
});

