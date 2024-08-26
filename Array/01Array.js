const arr = [1,2,3,'a',"Anushri"];
console.log(arr);

// const NewArray = new Array(1,2,'a','Chiku');
// console.log(NewArray);
// console.log(NewArray[3]);

//Array Methods

//Push method (Add element in array at last poistion)
// arr.push(6);arr.push(7);
// console.log(arr);


//Push method (remove element in array at last poistion)
// arr.pop()
// console.log(arr);

// insert element at 1st postion in array
// arr.unshift(0);
// console.log(arr);

// remove element at 1st postion in array
// arr.shift();
// console.log(arr);

//If element is present or not in array
// console.log(arr.includes(1));
// console.log(arr);

//If index is present or not in array
// console.log(arr.includes(1));
// console.log(arr);


//jOIN BIND INTO NEW ARRAY BUT IN STRING FORMAT
// const newArr = arr.join()
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

//SLICE ,SPICE
//Original Array
console.log("A ",arr);

const NA1 = arr.slice(1,3);
console.log(NA1); //only print index at 1,2
console.log("B ",arr);//Original array after using Slice

//SPLICE
const NA2 = arr.splice(1,3);//only print index at 1,2,3
console.log("C ",arr);//Original array after using splice
console.log(NA2);