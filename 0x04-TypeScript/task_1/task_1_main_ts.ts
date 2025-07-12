// Task 1: Teacher Interface and Classes
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  subject: 'Math',
};

const director1: Directors = {
  firstName: 'Alice',
  lastName: 'Johnson',
  location: 'San Francisco',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const student1 = new StudentClass('Bob', 'Wilson');

// Display results
const container = document.createElement('div');
container.innerHTML = `
  <h2>Task 1: Teacher Interface and Classes</h2>
  <h3>Teachers:</h3>
  <p><strong>Teacher 1:</strong> ${teacher1.firstName} ${teacher1.lastName} - ${teacher1.location}</p>
  <p><strong>Teacher 2:</strong> ${teacher2.firstName} ${teacher2.lastName} - ${teacher2.location} (${teacher2.yearsOfExperience} years)</p>
  <h3>Director:</h3>
  <p><strong>Director:</strong> ${director1.firstName} ${director1.lastName} - ${director1.location} (${director1.numberOfReports} reports)</p>
  <h3>Functions:</h3>
  <p><strong>Print Teacher:</strong> ${printTeacher(teacher1.firstName, teacher1.lastName)}</p>
  <h3>Student:</h3>
  <p><strong>Student:</strong> ${student1.displayName()}</p>
  <p><strong>Work Status:</strong> ${student1.workOnHomework()}</p>
`;

document.body.appendChild(container);