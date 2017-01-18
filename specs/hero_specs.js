var assert = require("assert");
var Hero = require("../hero")
var Food = require("../food")
var Rat = require("../rat")

describe("Hero", function(){

  var myHero;
  var rat;
  var pizza;
  var pasta;
  var sandwich;

  beforeEach(function(){
    myHero = new Hero("Arthur", "Perfectly normal beast sandwich");
    rat = new Rat();
    pizza = new Food("Pizza", 25);
    pasta = new Food("pasta", 30);
    sandwich = new Food("Perfectly normal beast sandwich", 50);
  });

  it("should have a name", function(){
    assert.equal("Arthur", myHero.name);
  })
  it("Should have health", function(){
    assert.equal(100, myHero.health);
  })
  it("should have a favourite food", function(){
    assert.equal("Perfectly normal beast sandwich", myHero.faveFood);
  })

  it("should be able to say it's name", function(){
    assert.equal("My name is Arthur", myHero.speakName());
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
})