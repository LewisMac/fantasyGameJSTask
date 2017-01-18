var assert = require("assert");
var Hero = require("../hero")
var Food = require("../food")
var Rat = require("../rat")
var Monster = require("../monster");
var Chance = require("../chanceElement");


describe("Hero", function(){

  var myHero;
  var rat;
  var pizza;
  var pasta;
  var sandwich;
  var vogon;
  var hooloovoo;
  var dice;

  beforeEach(function(){
    myHero = new Hero("Arthur Dent", "Perfectly normal beast sandwich", 50, false);
    rat = new Rat();
    pizza = new Food("Pizza", 25);
    pasta = new Food("pasta", 30);
    sandwich = new Food("Perfectly normal beast sandwich", 50);
    vogon = new Monster(100, "Vogon", 25, false);
    hooloovoo = new Monster(200, "Hooloovoo", 75, false);
    bossVogon = new Monster(200, "Vogon", 40, true);
    dice = new Chance(true);
  });

  it("should have a name", function(){
    assert.equal("Arthur Dent", myHero.name);
  })
  it("Should have health", function(){
    assert.equal(100, myHero.health);
  })
  it("should have a favourite food", function(){
    assert.equal("Perfectly normal beast sandwich", myHero.faveFood);
  })

  it("should be able to say it's name", function(){
    assert.equal("My name is Arthur Dent", myHero.speakName());
  })

  it("Should be able to eat food to increase health", function(){
    myHero.eat(pizza);
    assert.equal(125, myHero.health);
  })

  it("Should increase in health more if favourite food", function(){
    myHero.eat(sandwich);
    assert.equal(175, myHero.health)
  })

  it("should decrease health if eating poisoned food", function(){
    rat.poisonFood(sandwich);
    myHero.eat(sandwich);
    assert.equal(75, myHero.health)
  })

  it("Should be able to fight monsters", function(){
    myHero.fight(vogon, dice);

    assert.equal(100, myHero.health);
    assert.equal(50, vogon.health);
  })

  it("should win battles when monster dies", function(){

    assert.equal("the battle continues", myHero.fight(vogon, dice));
    assert.equal("you win", myHero.fight(vogon, dice));
  })

  it("should lose battles when you die", function(){
    assert.equal("the battle continues", myHero.fight(hooloovoo, dice));
    assert.equal("you died", myHero.fight(hooloovoo, dice));
  })

  it("Should have a hard time fighting a boss", function(){
    assert.equal("the battle continues", myHero.fight(bossVogon, dice));
    assert.equal("you died", myHero.fight(bossVogon, dice));
  })

  it("Should have an easier time fighting boss if they are a hoopy frood who knows where their towel is", function(){
    myHero.towel = true;

    assert.equal("the battle continues", myHero.fight(bossVogon, dice));
    assert.equal("the battle continues", myHero.fight(bossVogon, dice));
    assert.equal("you win", myHero.fight(bossVogon, dice));
  })
})