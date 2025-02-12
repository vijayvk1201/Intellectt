// models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
