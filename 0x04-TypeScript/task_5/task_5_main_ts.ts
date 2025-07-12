// Task 5: Declaration Merging and Brand Convention
// Brand convention - creating nominal types
interface MajorCredits {
  credits: number;
  _majorCreditsBrand: void;
}

interface MinorCredits {
  credits: number;
  _minorCreditsBrand: void;
}

// Functions to create branded types
function createMajorCredits(credits: number): MajorCredits {
  return { credits, _majorCreditsBrand: void 0 };
}

function createMinorCredits(credits: number): MinorCredits {
  return { credits, _minorCreditsBrand: void 0 };
}

// Functions to sum credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return createMajorCredits(subject1.credits + subject2.credits);
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return createMinorCredits(subject1.credits + subject2.credits);
}

// Example usage
const majorCredits1 = createMajorCredits(3);
const majorCredits2 = createMajorCredits(4);
const majorCredits3 = createMajorCredits(5);

const minorCredits1 = createMinorCredits(1);
const minorCredits2 = createMinorCredits(2);
const minorCredits3 = createMinorCredits(2);

// Sum credits
const totalMajorCredits = sumMajorCredits(
  sumMajorCredits(majorCredits1, majorCredits2),
  majorCredits3
);

const totalMinorCredits = sumMinorCredits(
  sumMinorCredits(minorCredits1, minorCredits2),
  minorCredits3
);

// Additional interfaces for student records
interface StudentRecord {
  id: number;
  name: string;
  majorCredits: MajorCredits;
  minorCredits: MinorCredits;
}

interface GraduationRequirements {
  majorCreditsRequired: number;
  minorCreditsRequired: number;
}

// Create student records
const student1: StudentRecord = {
  id: 1,
  name: 'Alice Johnson',
  majorCredits: createMajorCredits(45),
  minorCredits: createMinorCredits(12),
};

const student2: StudentRecord = {
  id: 2,
  name: 'Bob Smith',
  majorCredits: createMajorCredits(38),
  minorCredits: createMinorCredits(15),
};

const graduationReqs: GraduationRequirements = {
  majorCreditsRequired: 40,
  minorCreditsRequired: 10,
};

// Function to check graduation eligibility
function checkGraduationEligibility(student: StudentRecord, requirements: GraduationRequirements): boolean {
  return student.majorCredits.credits >= requirements.majorCreditsRequired &&
         student.minorCredits.credits >= requirements.minorCreditsRequired;
}

// Display results
const container = document.createElement('div');
container.innerHTML = `
  <h2>Task 5: Declaration Merging and Brand Convention</h2>
  
  <h3>Credit System:</h3>
  <p><strong>Major Credits Example:</strong></p>
  <ul>
    <li>Subject 1: ${majorCredits1.credits} credits</li>
    <li>Subject 2: ${majorCredits2.credits} credits</li>
    <li>Subject 3: ${majorCredits3.credits} credits</li>
    <li><strong>Total Major Credits: ${totalMajorCredits.credits}</strong></li>
  </ul>
  
  <p><strong>Minor Credits Example:</strong></p>
  <ul>
    <li>Subject 1: ${minorCredits1.credits} credits</li>
    <li>Subject 2: ${minorCredits2.credits} credits</li>
    <li>Subject 3: ${minorCredits3.credits} credits</li>
    <li><strong>Total Minor Credits: ${totalMinorCredits.credits}</strong></li>
  </ul>
  
  <h3>Student Records:</h3>
  <div style="margin: 10px 0; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
    <h4>${student1.name} (ID: ${student1.id})</h4>
    <p>Major Credits: ${student1.majorCredits.credits}</p>
    <p>Minor Credits: ${student1.minorCredits.credits}</p>
    <p><strong>Graduation Eligible:</strong> ${checkGraduationEligibility(student1, graduationReqs) ? 'Yes' : 'No'}</p>
  </div>
  
  <div style="margin: 10px 0; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
    <h4>${student2.name} (ID: ${student2.id})</h4>
    <p>Major Credits: ${student2.majorCredits.credits}</p>
    <p>Minor Credits: ${student2.minorCredits.credits}</p>
    <p><strong>Graduation Eligible:</strong> ${checkGraduationEligibility(student2, graduationReqs) ? 'Yes' : 'No'}</p>
  </div>
  
  <h3>Graduation Requirements:</h3>
  <p>Major Credits Required: ${graduationReqs.majorCreditsRequired}</p>
  <p>Minor Credits Required: ${graduationReqs.minorCreditsRequired}</p>
  
  <h3>Credit Calculator:</h3>
  <div id="calculator">
    <label>Major Credits: <input type="number" id="majorInput" value="0" min="0"></label><br><br>
    <label>Minor Credits: <input type="number" id="minorInput" value="0" min="0"></label><br><br>
    <button onclick="calculateCredits()">Calculate Total</button>
    <button onclick="checkEligibility()">Check Graduation Eligibility</button>
  </div>
  <div id="calculator-output"></div>
  
  <div style="margin-top: 20px; padding: 10px; background-color: #f0f0f0; border-radius: 5px;">
    <strong>Note:</strong> This task demonstrates the brand convention in TypeScript,
    which creates nominal types to prevent accidental mixing of similar but distinct types.
    MajorCredits and MinorCredits are structurally similar but nominally different.
  </div>
`;

// Add interactive functionality
(window as any).calculateCredits = function() {
  const majorInput = document.getElementById('majorInput') as HTMLInputElement;
  const minorInput = document.getElementById('minorInput') as HTMLInputElement;
  const output = document.getElementById('calculator-output');
  
  if (majorInput && minorInput && output) {
    const majorValue = parseInt(majorInput.value) || 0;
    const minorValue = parseInt(minorInput.value) || 0;
    
    const major = createMajorCredits(majorValue);
    const minor = createMinorCredits(minorValue);
    
    output.innerHTML = `
      <h4>Calculation Results:</h4>
      <p>Major Credits: ${major.credits}</p>
      <p>Minor Credits: ${minor.credits}</p>
      <p><strong>Total Credits: ${major.credits + minor.credits}</strong></p>
    `;
  }
};

(window as any).checkEligibility = function() {
  const majorInput = document.getElementById('majorInput') as HTMLInputElement;
  const minorInput = document.getElementById('minorInput') as HTMLInputElement;
  const output = document.getElementById('calculator-output');
  
  if (majorInput && minorInput && output) {
    const majorValue = parseInt(majorInput.value) || 0;
    const minorValue = parseInt(minorInput.value) || 0;
    
    const eligible = majorValue >= graduationReqs.majorCreditsRequired && 
                    minorValue >= graduationReqs.minorCreditsRequired;
    
    output.innerHTML = `
      <h4>Graduation Eligibility Check:</h4>
      <p>Your Major Credits: ${majorValue} (Required: ${graduationReqs.majorCreditsRequired})</p>
      <p>Your Minor Credits: ${minorValue} (Required: ${graduationReqs.minorCreditsRequired})</p>
      <p><strong>Status: ${eligible ? 'ELIGIBLE FOR GRADUATION! 🎓' : 'Not yet eligible'}</strong></p>
    `;
  }
};

document.body.appendChild(container);