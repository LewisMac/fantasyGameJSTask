var assert = require("assert");
var Rat = require("../rat")
var Food = require("../food")

describe("Rat", function(){

  var pasta;
  var rat;
  beforeEach(function(){
    rat = new Rat();
    pasta = new Food("pasta", 30);
  });

  it("should be able to poison food", function(){
    rat.poisonFood(pasta);
    assert.equal(true, pasta.poisonous);
  })

});