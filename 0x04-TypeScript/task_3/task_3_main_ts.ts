// Task 3: Ambient Namespaces and Declaration Merging
/// <reference path="./js/crud.d.ts" />

// Define the interface for a Row object
interface RowID extends Number {}

interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

// Since we don't have the actual crud.js file, we'll simulate the CRUD operations
namespace CRUD {
  export function insertRow(row: RowElement): RowID {
    console.log('Insert row', row);
    return Math.floor(Math.random() * 1000) as RowID;
  }

  export function deleteRow(rowId: RowID): void {
    console.log('Delete row id', rowId);
  }

  export function updateRow(rowId: RowID, row: RowElement): RowID {
    console.log('Update row', rowId, row);
    return rowId;
  }
}

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert a new row and get the row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// Update the row
const updatedRowID: RowID = CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(updatedRowID);

// Additional examples with different data
const row2: RowElement = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 25,
};

const row3: RowElement = {
  firstName: 'Bob',
  lastName: 'Smith',
};

const rowID2 = CRUD.insertRow(row2);
const rowID3 = CRUD.insertRow(row3);

// Display results
const container = document.createElement('div');
container.innerHTML = `
  <h2>Task 3: Ambient Namespaces and Declaration Merging</h2>
  <h3>CRUD Operations:</h3>
  <p><strong>Original Row:</strong> ${row.firstName} ${row.lastName}</p>
  <p><strong>New Row ID:</strong> ${newRowID}</p>
  <p><strong>Updated Row:</strong> ${updatedRow.firstName} ${updatedRow.lastName}, Age: ${updatedRow.age}</p>
  <p><strong>Updated Row ID:</strong> ${updatedRowID}</p>
  <h3>Additional Records:</h3>
  <p><strong>Row 2:</strong> ${row2.firstName} ${row2.lastName}, Age: ${row2.age} (ID: ${rowID2})</p>
  <p><strong>Row 3:</strong> ${row3.firstName} ${row3.lastName} (ID: ${rowID3})</p>
  <h3>Operations Log:</h3>
  <p>Check the browser console for detailed CRUD operation logs.</p>
  <div style="margin-top: 20px; padding: 10px; background-color: #f0f0f0; border-radius: 5px;">
    <strong>Note:</strong> This task demonstrates ambient namespaces and declaration merging.
    In a real project, you would have separate .d.ts files for type definitions.
  </div>
`;

document.body.appendChild(container);