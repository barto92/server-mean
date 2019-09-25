const Employee = require("../models/employee.model");
const EmployeeController = {};

EmployeeController.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

EmployeeController.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};

EmployeeController.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({
    status: "Employee deleted"
  });
};

EmployeeController.editEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  };
  await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
  res.json({
    status: "Employee updated"
  });
};

EmployeeController.createEmployee = async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
    lastName: req.body.lastName
  });
  await employee.save();
  res.json({
    status: "Employee Saved"
  });
};

module.exports = EmployeeController;
