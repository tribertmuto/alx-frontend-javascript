// Task 11: Brand convention & Nominal typing

// Create MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

// Create MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Create sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major'
  };
}

// Create sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor'
  };
}

// Example usage
const major1: MajorCredits = { credits: 3, brand: 'Major' };
const major2: MajorCredits = { credits: 4, brand: 'Major' };
const minor1: MinorCredits = { credits: 2, brand: 'Minor' };
const minor2: MinorCredits = { credits: 1, brand: 'Minor' };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log('=== Task 11 Results ===');
console.log('Total Major Credits:', totalMajor);
console.log('Total Minor Credits:', totalMinor);

// Export for use in other modules
export { sumMajorCredits, sumMinorCredits };
export type { MajorCredits, MinorCredits };
