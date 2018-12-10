var employees = []
function Employee(name, jobTitle, salary, status) {
    // use the "this" keyword to reference each object 
    // that is created from this constructor
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full-Time";
}
function printEmployeeForm(){
    console.log(this)
}
Employee.prototype.printEmployeeForm = printEmployeeForm;
// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:
var mikey = new Employee("Mikey", "Lord", "$Infinite/life");
var mark = new Employee("Mark", "Instructor", "$8/hr");
var ben = new Employee("Ben", "VSchool Lord", "$666/hr");
var eric = new Employee("Eric", "VSchool Lord", "$666/hr",);

eric.status = "Part-Time";

mikey.printEmployeeForm();
mark.printEmployeeForm();
ben.printEmployeeForm();
eric.printEmployeeForm();

employees.push(mikey, mark, ben, eric);

console.log(employees)