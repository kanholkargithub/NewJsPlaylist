//SingalTone
//*What is Singaltone

//Object Literals
const mysym = Symbol("my")
const jsUser = {
    'full name' :"Anushri",
    age :24,
    Position :'Web Developer',
    salary : 8000,
    Email : 'anushrikanholkar2@gmail.com',
    LastLoginDays : ['Monday','Saturday'],
    [mysym] : mysym

}

console.log(jsUser.Email);
console.log(jsUser["full name"]);
console.log(jsUser["Email"]);
console.log(jsUser[mysym]);
console.log(typeof jsUser.mysym);
console.log(typeof jsUser[mysym]);

jsUser.Email="no";
Object.freeze(jsUser);//Doesnt change anything
jsUser.Email="nothing";
console.log(jsUser);
