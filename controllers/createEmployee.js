const Employee = require('../models/employee');
exports.createEmployee = async (req, res) => {


    try {
        const { name, mobile, department, designation } = req.body;

        const employee = new Employee({name, mobile, department, designation});
        await employee.save();
        res.status(200).json({
            message: 'Employee Created Successfully',
            data: employee
        })







    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Server Error',
            error: err.message
        })
    }








}
exports.getEmployess = async (req, res) => {


    try {
        const employees = await Employee.find({});
        res.status(200).json({
            message: 'Employees fetched successfully',
            data: employees
        })
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Server Error',
            error: err.message
        })
    }
}