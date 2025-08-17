// Task 10: Update task_4/js/main.ts

// Import all the necessary classes and interfaces
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Create and export constants for Cpp, Java, and React Subjects
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export one Teacher object cTeacher
export const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
  experienceTeachingReact: 5,
  experienceTeachingJava: 7
};

// Test Cpp subject
console.log('=== C++ Subject ===');
cpp.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Test Java subject
console.log('\n=== Java Subject ===');
java.setTeacher(cTeacher);
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Test React subject
console.log('\n=== React Subject ===');
react.setTeacher(cTeacher);
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
