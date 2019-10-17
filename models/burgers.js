
var orm = require('../config/orm');

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        //This cb is sent into our burgers_controller file
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    deleteAll: function(cb) {
      orm.deleteAll("burgers", function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_Controller.js).
  module.exports = burger;
