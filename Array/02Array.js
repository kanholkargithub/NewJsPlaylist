const marvel_Heros = ["thor","Ironman","spiderman"]

const dc_heros = ["superman","flash","batman"];

// marvel_Heros.push(dc_heros);
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

//concat
// const newHero= marvel_Heros.concat(dc_heros);
// console.log(newHero);

//spread operator
// const AllNewHeros =[...marvel_Heros,...dc_heros];
// console.log(AllNewHeros);

//flat Array
// const AnotherArray = [1,2,3,[4,5,6],7,8,[6,7,[4,5]]];
// const reaLArray = AnotherArray.flat(Infinity);
// console.log(reaLArray);


//ask and convert array (isArray,from,of)
console.log(Array.isArray("Anushri"));
console.log(Array.from("Hitesh"));

console.log(Array.from({name : "Anushri"}));

let score1=100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));