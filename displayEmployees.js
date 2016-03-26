/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var DB = require('./dbclient');
var Course = DB.getModel();

module.exports = function displayEmployees(req, res, next) {
    Course.find({}, function(err, employees) {
        if(err) {
            console.log('Error : %s', err);
        }
        var results = employees.map(function(data) {
            return {
                id: data._id,
                firstname: data.firstname,
                lastname: data.lastname
            };
        });
        res.render('displayEmployeesView', 
        {title: 'List of Employees', datum: results});
    });
};
