let myArray = [42, "apple", 15, "banana", true];

let firstElement = myArray[0]; 
let lastElement = myArray[myArray.length - 1]; 
let middleElement = myArray[Math.floor(myArray.length / 2)]; 

console.log("First Element:", firstElement);  
console.log("Last Element:", lastElement);  
console.log("Middle Element:", middleElement); 


console.log("Array Length:", myArray.length);  

myArray.push("grape"); 
console.log("After push:", myArray); 

myArray.pop(); 
console.log("After pop:", myArray); 

myArray.shift(); 
console.log("After shift:", myArray); 

myArray.unshift("orange");
console.log("After unshift:", myArray); 

console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

console.log("Using forEach method:");
myArray.forEach((element) => {
  console.log(element);
});

const [first, second, ...rest] = myArray;
console.log("First:", first);  
console.log("Second:", second); 
console.log("Rest:", rest);
