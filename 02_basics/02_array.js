// Array Part 2
"use strict";
const marvel_heros = ["thar", "ironman", "manoj"];
const dc_heros = ["superman", "javac", "python"];

marvel_heros.push(dc_heros);
//console.log(marvel_heros);
const allHeros = marvel_heros.concat(dc_heros);

//console.log(allHeros);
const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [2, 4, 6]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Mahesh"));
// console.log(Array.from("Mahesh"));
// console.log(Array.from({ name: "Mahesh" }));
let score1 = 200;
let score2 = 300;
let score3 = 400;
let score4 = 500;
console.log(Array.of(score1, score2, score3, score4));
