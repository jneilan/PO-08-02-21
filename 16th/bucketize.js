/*
Weekly Coding Challenge: Word Bucket

Write a function that divides a phrase into word buckets, containing <= n chars. 
Only include full words inside each bucket.

Examples
bucketize("she sells sea shells by the sea", 10) ➞ ["she sells", "sea shells", "by the sea"]
bucketize("the mouse jumped over the cheese", 7) ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]
bucketize("fairy dust coated the air", 20) ➞ ["fairy dust coated", "the air"]
bucketize("a b c d e", 2) ➞ ["a", "b", "c", "d", "e"]

Notes
Spaces count as one character.
Trim beginning and end spaces for each word bucket (see final example).
If buckets are too small to hold a single word, return an empty array: []
*/

function bucketize(s,n) {
	if (s.length == 0) return [];
  
  let bucket = [];
  let words = s.split(' ');
  
  let charCount = 0;
  let currentString = '';
  
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > n) return []; // check if buckets are too small to hold a single word
    
    if (charCount == 0) { // start bucket
    	currentString = w;
      charCount = w.length;
    }
    
    else if (charCount + w.length + 1 <= n) { // add to existing bucket, if it fits
    	currentString = currentString + ' ' + w;
      charCount += w.length + 1; // plus one to account for the space character
    }
    
    else { // end bucket and start a new bucket
    	bucket.push(currentString);
    	currentString = w;
      charCount = w.length;
    }
  }
  
  // Add the remaining chars/string to a bucket
  bucket.push(currentString);
  
  return bucket;
}


/* TESTS */
console.log(bucketize("she sells sea shells by the sea", 10));
console.log(bucketize("the mouse jumped over the cheese", 7));
console.log(bucketize("fairy dust coated the air", 20));
console.log(bucketize("a b c d e", 2));
console.log(bucketize("hi bye", 2));
console.log(bucketize("hi bye", 3));
console.log(bucketize("", 1));
