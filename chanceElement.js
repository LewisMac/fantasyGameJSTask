var Chance = function(fixed){
  this.fixed = fixed;
}

Chance.prototype = {
  normalRoll: function(){
    if(this.fixed){
      return 4
    } else {
      return (Math.floor(Math.random() * 6) + 1 )
    }
  },
  bigRoll: function(){
    if(this.fixed){
      return 9
    } else {
      return (Math.floor(Math.random() * 12) + 1)
    }
  },
  smallRoll: function(){
    if(this.fixed){
      return 2
    } else {
      return (Math.floor(Math.random() * 3) + 1) 
    }
  },
};

module.exports = Chance;