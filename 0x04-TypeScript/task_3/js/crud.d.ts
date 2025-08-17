// Task 8: Ambient Namespaces - Type declarations for crud.js

// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Type declarations for crud functions
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
