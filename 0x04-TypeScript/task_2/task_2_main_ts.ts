// Task 2: Advanced Types and Functions
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Example usage
const employee1 = createEmployee(200);
const employee2 = createEmployee(1000);
const employee3 = createEmployee('$500');

// Display results
const container = document.createElement('div');
container.innerHTML = `
  <h2>Task 2: Advanced Types and Functions</h2>
  <h3>Employee Creation and Work Execution:</h3>
  <p><strong>Employee 1 (salary: 200):</strong> ${executeWork(employee1)}</p>
  <p><strong>Employee 2 (salary: 1000):</strong> ${executeWork(employee2)}</p>
  <p><strong>Employee 3 (salary: $500):</strong> ${executeWork(employee3)}</p>
  <h3>Class Teaching:</h3>
  <p><strong>Today's Math Class:</strong> ${teachClass('Math')}</p>
  <p><strong>Today's History Class:</strong> ${teachClass('History')}</p>
  <h3>Employee Details:</h3>
  <p><strong>Employee 1 Work From Home:</strong> ${employee1.workFromHome()}</p>
  <p><strong>Employee 2 Coffee Break:</strong> ${employee2.getCoffeeBreak()}</p>
  <p><strong>Employee 1 Type:</strong> ${isDirector(employee1) ? 'Director' : 'Teacher'}</p>
  <p><strong>Employee 2 Type:</strong> ${isDirector(employee2) ? 'Director' : 'Teacher'}</p>
`;

document.body.appendChild(container);