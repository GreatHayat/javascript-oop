class Student {
  constructor(name) {
    this.name = name;
  }
}

class Course {
  constructor(name, hours, seats) {
    this.name = name;
    this.hours = hours;
    this.seats = seats;
    this.students = [];
  }

  addStudent(student) {
    if (this.students.length < this.seats) {
      this.students.push(student);
      console.log(`${student.name} enrolled in ${this.name} successfully`);
      return;
    } else {
      console.log("Seats are already filled");
      return;
    }
  }

  removeStudent(student) {
    if (this.students.length > 0) {
      let index = this.students.indexOf(student);
      this.students.splice(index, 1);
      return this.students;
    }
  }

  get courseInfo() {
    return `${this.name} is ${this.hours} credit hours and limited ${this.seats} seats`;
  }
}

let khizar = new Student("Khizar Hayat");
let sultan = new Student("Sultan Mahmood");
let inam = new Student("Inam Hussain");
let course = new Course("Introduction to Python", 3, 2);

course.addStudent(khizar);
course.addStudent(sultan);
//course.addStudent(inam);
let result = course.removeStudent(sultan);
console.log(result);
