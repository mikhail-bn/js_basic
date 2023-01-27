//1
console.log(+'50'); // Не явное
console.log(Number('50')); // Явное
//2
console.log(Number('100'));  // Явное
console.log(+'100');  // Не явное
//3
console.log('' + 1); // Не явное
console.log(String(1)); // Явное
//4
console.log(String(1)); // Явное
console.log('' + 1); // Не явное
//5 
console.log('Boolean data: ', Boolean(0));
//6 
console.log(+'001'); // Не явное
console.log(Number('001')); // Явное
//7 
console.log(1 + ''); // Не явное - string
console.log(String(1)); // Явное 
//8 
console.log('Boolean data: ', Boolean(1)); // Явное true
console.log('Boolean data: ', !1); // Не явное false
console.log('Boolean data: ', !!1); // Не явное true
//9 
console.log(String(001)); // Явное 1 -string
console.log('' + 001);  // Не явное 1 -string
//10 
console.log(Number('Hello World')); // Явное NaN
console.log(+'Hello World'); // Не явное NaN




