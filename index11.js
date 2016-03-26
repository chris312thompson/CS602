/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var em = require('./employeeModule');
var router = express.Router();

//other modules
var displayEmployees = require('./displayEmployees');
var addEmployee = require('./addEmployee');
//var deleteEmployee = require('./deleteEmployee');
//var editEmployee = require('./editEmployee');
var saveEmployee = require('./saveEmployee');
//var saveAfterEdit = require('./saveAfterEdit');

router.get('/', function(req, res, next) {
    res.redirect('/displayEmployees');
});

router.get('/displayEmployees', displayEmployees);

router.get('/addEmployee', addEmployee);
router.post('/addEmployee', saveEmployee);



//router.get('/editEmployee/:id', editEmployee);
//router.post('/saveAfterEdit/:id', saveAfterEdit);

//router.get('/deleteEmployee/:id', deleteEmployee);

module.exports = router;


