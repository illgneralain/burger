// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const cat = {
  selectAll(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  insetOne(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, (res) => cb(res));
  },
  updateOne(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
  },
  deleteOne(condition, cb) {
    orm.deleteOne('burgers', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
