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
    console.log("\nMy name is " + this.name + "\nI am a " + this.jobTitle + "\nI make " + this.salary + "per hour" + "\nI work " + this.status)
}
Employee.prototype.printEmployeeForm = printEmployeeForm;
// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:
var mikey = new Employee("Mikey", "Lord", "$(INSANE AMOUNT)$ ");
var mark = new Employee("Mark", "Instructor", "$8 ");
var ben = new Employee("Ben", "VSchool Lord", "$666 ");
var eric = new Employee("Eric", "VSchool Lord", "$666 ",);

eric.status = "Part-Time";

mikey.printEmployeeForm();
mark.printEmployeeForm();
ben.printEmployeeForm();
eric.printEmployeeForm();

employees.push(mikey, mark, ben, eric);

console.log(employees)