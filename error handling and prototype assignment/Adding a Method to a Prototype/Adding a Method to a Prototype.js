// Prototype object called Student
function Student(name) {
    this.name = name;
  }
  
  // Add a method called printDetails to the prototype
  Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Instantiate a Student object with the name "Mithun"
  const student = new Student("Mindup");
  
  // Call the printDetails method
  student.printDetails(); // Output: "Hello, my name is Mithun"
  