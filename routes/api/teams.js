/**
 * Created by tunte on 12/14/15.
 */
var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var query = db.query('SELECT * FROM teams');
    query.then(
        function(users) {
            res.send(users);
        }
    );

});

router.get('/:id', function(req, res, next) {

    var group = req.params.id;

    var query = db.query("SELECT * FROM teams WHERE `group` = " + group);

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

    var name = req.body.name;
    var group = req.body.group;

    var query = db.query("INSERT INTO teams (name, `group`) VALUES(?, ?)", [name, group]);

    query.then(
        function(teams) {
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
