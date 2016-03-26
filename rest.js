/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var em = require('./employeeModule');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Employee data
 var data = [
    {id: 1, firstname: 'John', lastname: 'Smith'},
    {id: 2, firstname: 'Jane', lastname: 'Smith'},
    {id: 3, firstname: 'John', lastname: 'Doe'}
    ];

var _ = require('underscore');




/** Return user with this employee ID. Return in json, xml, html 
*** and plain text format
**/
app.get('/id/:id', function(req, res) {
    console.log('req: ' + req.toString());
    
  res.format({
      'application/json': function() {
          res.json(em.lookupById(req.params.id));
      },
      'application/xml': function() {
          var data = JSON.parse(JSON.stringify(em.lookupById(req.params.id)));
          var employeeInfoXML = 
                  '<?xml version="1.0"?>\n<employee>\n' +
                       ' <employee id="' + data.id + '">' +
                          '<employee firstname= ' + data.firstname + '">' +
                        '<employee lastname= ' + data.lastname + '">' +
                        '</employee>' + '\n</employee>\n';
          res.type('application/xml');
          res.send(employeeInfoXML);
      }, 
      'text/html': function() {
          var dataHTML = JSON.parse(JSON.stringify(em.lookupById(req.params.id)));
          var employeeInfoHTML = '<ul>\n' +
                  ' <li>' + dataHTML.id + ' - ' +
                              dataHTML.firstname + ' - ' + 
                              dataHTML.lastname + '</li>';
          
          
          res.type('text/html');
          res.send(employeeInfoHTML);
      },
      'text/plain': function() {
          var dataPT = JSON.parse(JSON.stringify(em.lookupById(req.params.id)));
          var employeeInfoPT = 'id = ' + dataPT.id + ' : ' +
                               'firstname = ' + dataPT.firstname + ' : ' +
                                'lastname = ' + dataPT.lastname ;
          res.type('text/plain');
          res.send(employeeInfoPT);
      },
      'default' : function() {
          res.status(404);
          res.send('<b>404 - Not found </b>');
      }
  });
    
});

/**Return employees with the given last name. Returns data in json
** html, xml and plain text format
**/
app.get('/lastname/:name', function(req, res) {
        console.log('req: ' + req.toString());
    
  res.format({
      'application/json': function() {
          res.json(em.lookupByLastName(req.params.name));
      },
      'application/xml': function() {
          var data = JSON.parse(JSON.stringify(em.lookupByLastName(req.params.name)));
          var employeeInfoXML = 
                  '<?xml version="1.0"?>\n<employee>\n' +
                       ' <employee id="' + data.id + '">' +
                          '<employee firstname= ' + data.firstname + '">' +
                        '<employee lastname= ' + data.lastname + '">' +
                        '</employee>' + '\n</employee>\n';
          res.type('application/xml');
          res.send(employeeInfoXML);
      }, 
      'text/html': function() {
          var dataHTML = JSON.parse(JSON.stringify(em.lookupByLastName(req.params.name)));
          var employeeInfoHTML = '<ul>\n' +
                  ' <li>' + dataHTML.id + ' - ' +
                              dataHTML.firstname + ' - ' + 
                              dataHTML.lastname + '</li>';
          
          
          res.type('text/html');
          res.send(employeeInfoHTML);
      },
      'text/plain': function() {
          var dataPT = JSON.parse(JSON.stringify(em.lookupByLastName(req.params.name)));
          var employeeInfoPT = 'id = ' + dataPT.id + ' : ' +
                               'firstname = ' + dataPT.firstname + ' : ' +
                                'lastname = ' + dataPT.lastname ;
          res.type('text/plain');
          res.send(employeeInfoPT);
      },
      'default' : function() {
          res.status(404);
          res.send('<b>404 - Not found </b>');
      }
  });
});



//Return a list of all employees
app.get('/employeeList', function(req, res) {
    res.render('employeeList',
    {datum: em.getAllEmployees()});
});

//Render the newEmployee form
app.get('/addEmployee', function(req, res) {
    res.render('newEmployee');
});





/**
app.get('/newEmployee', function(req, res) {
     
     res.render('newEmployee');
    var html = 
            '<form method= "POST" action="/data">'+
            'Firstname: <input name="firstname" value=""> <br>' +
            'Lastname: <input name="lastname" value=""> <br/> '+
            '<input type="Submit" </form>';
            res.send(html);
        
});

**/
//Post the new employee data
app.post('/addEmployee', function(req, res) {
    em.addEmployee(req.body.fname, req.body.lname);
});

app.post('/data', function(req, res) {
    var bodyData = JSON.stringify(req.body);
    res.send("Body Data: "  + bodyData);
});

// setup handlebars view engine
var handlebars = require('express-handlebars');

// initialize the template engine using the handlebars default constructor
app.engine('handlebars', handlebars({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.render('home');
    
});


app.get('/hr', function(req, res) {
    res.type('text/html');
    res.render('hr');
});

//Set default 404 status if path not found
app.use(function(req,res) {
    res.type('text/html');
    res.status(404);
    res.send('Oops...life happens');
});




app.listen(3000, function() {
    console.log('http://localhost:3000');
});

