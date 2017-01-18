var assert = require("assert");
var Monster = require("../monster");

describe("Monster", function(){

  var vogon;
  beforeEach(function(){
    vogon = new Monster(100, "Vogon", 25, false)
  })

  it("should have health", function(){
    assert.equal(100, vogon.health);
  })
  it("Should have a type", function(){
    assert.equal("Vogon", vogon.type);
  })
  it("should have a skill", function(){
    assert.equal(25, vogon.skill)
  })
  it("should have a boss status", function(){
    assert.equal(false, vogon.bossStatus)
  })
})