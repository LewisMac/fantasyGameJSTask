var assert = require("assert");
var Food = require("../food")

describe("Food", function(){

  var pizza;
  var pasta;
  var sandwich;

  beforeEach(function(){
    pizza = new Food("Pizza", 50);
    pasta = new Food("pasta", 25);
    sandwich = new Food("Perfectly normal beast sandwich", 100);
  });

  it("should have a name", function(){
    assert.equal("Perfectly normal beast sandwich", sandwich.name);
  })
  it("should have a nourishment value", function(){
    assert.equal(100, sandwich.nourishment)
  })
});