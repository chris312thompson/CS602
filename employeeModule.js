/* 
 * Christopher Thompson
 * Cs 602 HW1
 * February 15, 2016
 */

"use strict";
 

var _ = require('underscore');

    //Store id, firstname and lastnamein to data array
    var data = [
    {id: 1, firstname: 'John', lastname: 'Smith'},
    {id: 2, firstname: 'Jane', lastname: 'Smith'},
    {id: 3, firstname: 'John', lastname: 'Doe'}
    ];
   
   
  var change;
 

//Add firstname and lastname to data array
 module.exports.addEmployee = function(value1, value2) {
    data.push({id: data.length+1, firstname: value1, lastname: value2});
  };


 //Return data where id is found
 module.exports.lookupById = function(value) {
    var d = _.findWhere(data, {id: value});
    var str;
    console.log((_.findWhere(data, {id: value})));
    
   for (var i = 0; i < data.length; i++) {
        if(data[i].id == value) {
            return {id: data[i].id, firstname: data[i].firstname, 
                lastname: data[i].lastname};
        }
  
    }
       return {id: 'NOT FOUND', firstname: 'NOT FOUND', lastname: 'NOT FOUND'};
    
  
  
 };
 

 //change firstname at index returned by lookupById
 module.exports.changeFirstName = function(value) {
    return change.firstname = value;
};
 
//return data where lastname found
 module.exports.lookupByLastName = function(value) {
     
    
   for (var i = 0; i < data.length; i++) {
        if(data[i].lastname == value) {
            return {id: data[i].id, firstname: data[i].firstname, 
                lastname: data[i].lastname};
        }
        
    }
  
  
 };
 
  module.exports.getAllEmployees = function() {
   var str = JSON.parse(JSON.stringify(data));
      console.log(JSON.parse(JSON.stringify(data)));
      return data;
  };
    




//Ask instructor why the code below broke the program
 /*
 module.exports = {
     setId: function(counter) {
         data.id = counter++;
     },
     setFirstname: function(value) {
         data.firstname = value;
     },
     setLastname: function(value) {
         data.lastname = value;
     },
     getId: function() {
         return data.id;
     },
     getFirstname: function() {
         return data.firstname;
     },
     getLastname: function() {
         return data.lastname;
     }
 };
 
*/
 

       