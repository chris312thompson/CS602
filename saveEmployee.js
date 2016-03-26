var DB = require('./dbclient.js');
var Employee = DB.getModel();

module.exports = 
  function saveEmployee(req , res , next){
 
    

    var employee = new Employee({
     
     firstname:  req.body.firstname,
     lastname: req.body.lastname
    }); 
 
    employee.save(function (err, result){
      if(err)
        console.log("Error : %s ",err);
        console.log(result);
      res.redirect('/displayEmployees');
    });

  };
