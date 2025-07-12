// Task 4: Namespaces and Modules
export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Cpp {
    private _teacher: Teacher;

    constructor(teacher: Teacher) {
      this._teacher = teacher;
    }

    get teacher(): Teacher {
      return this._teacher;
    }

    set teacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this._teacher.firstName) {
        return `Available Teacher: ${this._teacher.firstName}`;
      }
      return "No available teacher";
    }
  }

  export class Java extends Cpp {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
  }

  export class React extends Cpp {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }
  }
}

// Create a teacher object
const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
};

const javaTeacher: Subjects.Teacher = {
  firstName: 'James',
  lastName: 'Gosling',
};

const reactTeacher: Subjects.Teacher = {
  firstName: 'Jordan',
  lastName: 'Walke',
};

// Create subject instances
const cpp = new Subjects.Cpp(cTeacher);
const java = new Subjects.Java(javaTeacher);
const react = new Subjects.React(reactTeacher);

// Constants for subjects
export const cppSubject = cpp;
export const javaSubject = java;
export const reactSubject = react;

// Display results
const container = document.createElement('div');
container.innerHTML = `
  <h2>Task 4: Namespaces and Modules</h2>
  <h3>C++ Subject:</h3>
  <p><strong>Teacher:</strong> ${cpp.teacher.firstName} ${cpp.teacher.lastName}</p>
  <p><strong>Requirements:</strong> ${cpp.getRequirements()}</p>
  <p><strong>Available Teacher:</strong> ${cpp.getAvailableTeacher()}</p>
  
  <h3>Java Subject:</h3>
  <p><strong>Teacher:</strong> ${java.teacher.firstName} ${java.teacher.lastName}</p>
  <p><strong>Requirements:</strong> ${java.getRequirements()}</p>
  <p><strong>Available Teacher:</strong> ${java.getAvailableTeacher()}</p>
  
  <h3>React Subject:</h3>
  <p><strong>Teacher:</strong> ${react.teacher.firstName} ${react.teacher.lastName}</p>
  <p><strong>Requirements:</strong> ${react.getRequirements()}</p>
  <p><strong>Available Teacher:</strong> ${react.getAvailableTeacher()}</p>
  
  <h3>Teacher Management:</h3>
  <div id="teacher-actions">
    <button onclick="changeTeacher()">Change C++ Teacher</button>
    <button onclick="showAllSubjects()">Show All Subjects</button>
  </div>
  <div id="teacher-output"></div>
  
  <div style="margin-top: 20px; padding: 10px; background-color: #f0f0f0; border-radius: 5px;">
    <strong>Note:</strong> This task demonstrates TypeScript namespaces and modules.
    The subjects are organized within the Subjects namespace and can be imported/exported.
  </div>
`;

// Add interactive functionality
(window as any).changeTeacher = function() {
  const newTeacher: Subjects.Teacher = {
    firstName: 'Bjarne',
    lastName: 'Stroustrup',
  };
  cpp.teacher = newTeacher;
  const output = document.getElementById('teacher-output');
  if (output) {
    output.innerHTML = `<p><strong>Updated C++ Teacher:</strong> ${cpp.teacher.firstName} ${cpp.teacher.lastName}</p>`;
  }
};

(window as any).showAllSubjects = function() {
  const output = document.getElementById('teacher-output');
  if (output) {
    output.innerHTML = `
      <h4>All Subjects Summary:</h4>
      <ul>
        <li><strong>C++:</strong> ${cpp.teacher.firstName} ${cpp.teacher.lastName}</li>
        <li><strong>Java:</strong> ${java.teacher.firstName} ${java.teacher.lastName}</li>
        <li><strong>React:</strong> ${react.teacher.firstName} ${react.teacher.lastName}</li>
      </ul>
    `;
  }
};

document.body.appendChild(container);