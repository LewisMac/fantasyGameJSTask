
var Hero = function(name, faveFood){
  this.name = name;
  this.faveFood = faveFood;
  this.health = 100;
};

Hero.prototype = {
  speakName: function(){
    return "My name is " + this.name;
  },
  eat: function(food){
    if(food.name === this.faveFood && !food.poisonous){
      this.health += (food.nourishment * 1.5);
    } else if(!food.poisonous) {
      this.health += food.nourishment;
    } else if(food.poisonous){
      this.health -= (food.nourishment/2)
    }
  },
};

module.exports = Hero;