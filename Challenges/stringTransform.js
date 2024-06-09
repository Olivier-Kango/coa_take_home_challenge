// Function to transform the string based on given rules
function transformString(str) {
  const len = str.length;

  // Rule 1: If length is divisible by 3, reverse the string
  if (len % 3 === 0) {
    return str.split('').reverse().join('');
  }

  // Rule 2: If length is divisible by 5, replace each character with its ASCII code
  if (len % 5 === 0) {
    let result = '';
    for (let i = 0; i < len; i += 1) {
      result += `${str.charCodeAt(i)} `;
    }
    return result.trim();
  }

  // Rule 3: If length is divisible by both 3 and 5, perform both operations in order
  if (len % 15 === 0) {
    str = str.split('').reverse().join(''); // Reverse the string first
    let result = '';
    for (let i = 0; i < len; i += 1) {
      result += `${str.charCodeAt(i)} `;
    }
    return result.trim();
  }

  // If none of the above conditions are met, return the original string
  return str;
}

// Example usage:
const str1 = 'Hamburger';
const str2 = 'Pizza';
const str3 = 'Chocolate Chip Cookie';
console.log(transformString(str1)); // Output: "regrubmaH"
console.log(transformString(str2)); // Output: "80 105 122 122 97"
console.log(transformString(str3)); // Output: "eikooCpihCetalocohC"
