// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let result = ''
    let zeros = num.toString().length - 1
    for(let i = 0; i < num.toString().length; i++){
      if(num.toString().charAt(i) !== '0'){
         result += `${( + num.toString().charAt(i) + ('0'.repeat(zeros)))} + `
      }
      zeros--
    }
    return result.slice(0, -3)
  
}
