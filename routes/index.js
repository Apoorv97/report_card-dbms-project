var express = require('express');
var router = express.Router();
var conn = require('../db');
/* GET home page. */

//database variables


router.get('/', function(req, res, next) {
  conn.acquire(function(err,con){
    var username;
    var eroll_no;
    var type;
    var score;
    var events_to='5';
    var events_at='3';
    con.query("SELECT eroll_no, name FROM student_details", function (err, result, fields) {
  		if (err) throw err;

  		console.log(result);
      username = result[1].name;
      eroll_no = result[1].eroll_no;

      console.log(username, eroll_no);

      con.query("SELECT type, performance FROM literary where enroll_no= ' "+eroll_no+" '" , function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        con.query("select type, performance from art where eroll_no=1", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          con.query("select type,performance from sports where eroll_no=1", function (err, result, fields) {
            if (err) throw err;
            console.log(result);

                	con.query("select quiz_id, grade from quiz where eroll_no=1", function (err, result, fields) {
                		if (err) throw err;
                		console.log(result);
                    con.query("select olym_id, grade from olympiads where eroll_no=1", function (err, result, fields) {
                      if (err) throw err;
                      console.log(result);
                      res.render('index', { title: 'Report Card', eroll_no:eroll_no, username:username, type:'Quiz', score:'7', events_at:events_at, events_to:events_to});

                    });
                	});
          });
        });
      });

	});

  })

});

module.exports = router;
