
// let MyDate = new Date();
// console.log(MyDate)
// console.log(MyDate.toString());
// console.log(MyDate.toLocaleString());
// console.log(typeof MyDate);

//How To Assign date 

// let createDate = new Date(2023,0,5);
// console.log(createDate.toString());

//  createDate = new Date(2023,01,5,5,03);
// console.log(createDate.toLocaleString());

// createDate = new Date("2023-01-03");
// console.log(createDate.toString());

//What is TimeSpan 
let MyTimeSpan = Date.now();
//console.log(MyTimeSpan);

//console.log(MyTimeSpan.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',
    {
        weekday:"long",
    }
));