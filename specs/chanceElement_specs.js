var assert = require("assert");
var Chance = require("../chanceElement");

describe("Chance elements", function(){
  var dice;

  beforeEach(function(){
    dice = new Chance(true);
  
  })

  it("should be able to generate a set number", function(){
    assert.equal(4, dice.normalRoll());
    assert.equal(9, dice.bigRoll());
    assert.equal(2, dice.smallRoll());
  })
})