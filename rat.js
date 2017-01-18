var Rat = function(){
}

Rat.prototype = {
  poisonFood: function(food){
    food.poisonous = true;
  }
}

module.exports = Rat;