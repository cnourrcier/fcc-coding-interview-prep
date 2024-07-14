// There are two ways in creating these kind of arrays. 
// One way is to create it directly. Below is how to create a 3 length Int16Array.
// const i8 = new Float64Array(4);
// console.log(i8);

// The second way is with a buffer.
// Create Int16Array array differently:
// const byteSize = 6; // Needs to be multiple of 2
// const buffer = new ArrayBuffer(byteSize);
// let i8View = new Int16Array(buffer);
// buffer.byteLength;
// i8View = new Int16Array(buffer);
// buffer.byteLength; // Returns 6;
// i8View.byteLength; // Returns 6;
// console.log(i8View);

// First create a buffer that is 64-bytes. 
// Then create a Int32Array typed array with a view of it called i32View.

const buffer = new ArrayBuffer(64); // buffer is 64 bits
let i32View = new Int32Array(buffer); // Each element is 4 bytes
console.log(i32View); // i32View has 16 elements (64 bytes / 4 bytes per element)
