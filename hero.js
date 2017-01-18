var Hero = function(name, faveFood, skill, towel){
  this.name = name;
  this.faveFood = faveFood;
  this.health = 100;
  this.skill = skill;
  this.towel = towel;
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

  fight: function(monster, dice){
    var monsterSkill = monster.skill;
    var heroSkill = this.skill;

    if(monster.bossStatus){
      monsterSkill *= 1.5;
    }
    if(this.towel){
      heroSkill *= 1.5;
    }
    if(monsterSkill > heroSkill){
      monsterRoll = dice.bigRoll;
      heroRoll = dice.normalRoll;
      if(monsterRoll > heroRoll){
        this.health -= monsterSkill;
      } else if (heroRoll > monsterRoll){
        monster.health -= heroSkill
      } else {
        monster.health -= heroSkill;
        this.health -= monsterSkill;
      }

    }else if(monsterSkill < heroSkill){
      monsterRoll = dice.smallRoll;
      heroRoll = dice.normalRoll;
      if(monsterRoll > heroRoll){
        this.health -= monsterSkill;
      } else if (heroRoll > monsterRoll){
        monster.health -= heroSkill
      } else {
        monster.health -= heroSkill;
        this.health -= monsterSkill;
      }

    } else {
      monster.health -= heroSkill;
      this.health -= monsterSkill;
    };

    if(monster.health <=0){
      return "you win";
    } else if (this.health <=0){
      return "you died";
    } else {
      return "the battle continues";
    }
    
  }
};

module.exports = Hero;