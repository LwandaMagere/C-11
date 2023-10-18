// const name = 'Dado Steven';
// const age = '30';
// const job = 'Software Engineer';
// const city = 'Nairobi';
// let html;

// function hello() {
//     return 'Hello'
// }

// // With Template Strings (es6)

// html = `
//     <ul> 
//         <li> Name: ${name}</li>
//         <li> Age: ${age}</li>
//         <li> Job: ${job}</li>
//         <li> City:${city}</li>
//         <li>${2 + 3}</li>
//         <li>${hello()}</li>
//         <li>${age < 30 ? 'over 30' : 'under 30'}</li>

//     </ul>
// `;

// document.body.innerHTML = html;

//********************************************************************** */

// // Create some Arrays
// const numbers = [12, 23, 45, 34, 78, 71, 17, 29];
// const numbers2 = new Array(12, 28, 45, 74, 78, 71, 17, 10);
// const fruits = ['Apple', 'Banana', 'Mango', 'Pears'];
// const mixed = ['String', true, undefined, null, {a: 1, b: 2}, new Date(), Symbol()];

// let val;

// // Get Array length
// val = numbers.length;
// // Check if is Array
// val = Array.isArray(numbers);
// // Find index of value
// val = numbers2.indexOf(74);

// // MUTATING ARRAYS

//     // // Add on to end
//     // numbers2.push(250);
//     // // Take off from end
//     // numbers2.pop();
//     // // Add on to front
//     // numbers2.unshift(120);
//     // // Take off from front
//     // numbers2.shift();
//     // // Reverse
//     // numbers.reverse();
//     // // concat
//     // val  = numbers.concat(numbers2);
//  // Sorting Arrays
//  val = fruits.sort();
//  val = numbers2.sort();

//  // Use the compare function
//  val = numbers2.sort(function(x,y){
//     return x - y;
//  });

//  // Find
//  function under50(num) {
//     return num <  50;
//  }

//  val = numbers2.find(under50);

// console.log(numbers2);
// console.log(val);


