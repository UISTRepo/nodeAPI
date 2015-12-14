/**
 * Created by tunte on 12/14/15.
 */
var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var query = db.query('SELECT * FROM trips');
    query.then(
        function(trips) {
            res.send(trips);
        },
        function (error) {
            console.log(error);
        }
    );

});

router.get('/:id', function(req, res, next) {

    var id = req.params.id;

    var query = db.query("SELECT * FROM trips WHERE `id` = " + id);

    query.then(
        function(teams) {
            res.send(teams);
        },
        function (error) {
            console.log(error);
        }
    );

});

router.post('/', function(req, res, next) {

    var from = req.body.from;
    var to = req.body.to;
    var time = req.body.time;
    var transporter = req.body.transporter;

    var query = db.query("INSERT INTO trips (`from`, `to`, `time`, transporter) VALUES(?, ?, ?, ?)",
        [from, to, time, transporter]);

    query.then(
        function(trip) {
            res.send('Success');
        },
        function (error) {
            console.log(error);
        }
    );

});

router.delete('/', function(req, res, next) {

    var id = req.query.id;

    var query = db.query("DELETE FROM teams WHERE id = " + id);

    query.then(
        function(teams) {
            res.send('Success');
        },
        function (error) {
            console.log(error);
        }
    );

});

module.exports = router;
