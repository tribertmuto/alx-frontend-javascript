// Task 8: Ambient Namespaces - Main implementation

// Triple slash directive for dependencies
/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Import CRUD functions
import * as CRUD from './crud.js';

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Create a const variable named newRowID with the type RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// Display results
console.log('=== Task 8 Results ===');
console.log('Inserted row:', row);
console.log('New Row ID:', newRowID);
console.log('Updated row:', updatedRow);
console.log('Deleted Row ID:', newRowID);
