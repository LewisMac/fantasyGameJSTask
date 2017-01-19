var Hero = require("./hero")
var Food = require("./food")
var Rat = require("./rat")
var Monster = require("./monster");
var Chance = require("./chanceElement");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var heroName;
var heroFood;
var heroSkill;
var gameHero;

rl.question("What is the name of your hero? ", (answer) => {
  heroName = answer;



  rl.question("What is your hero's favourite food? ", (answer) => {
    heroFood = answer;



    rl.question("What is your hero's skill level? ", (answer) => {
      heroSkill = answer;

      gameHero = new Hero(heroName, heroFood, heroSkill, false);

      console.log(gameHero);

      rl.close();
    });
  });
});




// console.log("Hi there");

