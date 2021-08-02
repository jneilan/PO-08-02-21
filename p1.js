/* Problem 1: Given two Strings A and B. Find the length of the Longest Common Subsequence (LCS) of the given Strings. 
Sample Input: A = Minneapolis, B = Minnesota. */

function lcs(a,b) {
  let lcs = '';
  let len = 0;
  let count = 0;
  let start = -1;
  
  let lenSmallest = Math.min(a.length, b.length);
  
  for (let i = 0; i < lenSmallest; i++) {
    if (a[i] == b[i]) count++;
    
    else {
      if (count > len) {
        len = count;
        start = i - len;
      }
      count = 0;
    }
    
  }
  
  if (count > len) {
    len = count;
  }
  
  //console.error('len: ' + len + ', start: ' + start + ', lcs: ' + a.slice(start,start+len));
  
  return len;
}


/*
Test code:

const a = 'Minneapolis';
const b = 'Minnesota';

console.log(lcs(a,b));
console.log(lcs('abc','def'));
console.log(lcs('',''));
console.log(lcs('abxabcde','abyabcdy'));
*/
