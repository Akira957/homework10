var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(vals, cb) {
      orm.insertOne(vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(condition, cb) {
      orm.updateOne(condition, function(res) {
        cb(res);
      });
    }
  };
  
  
  module.exports = burger;