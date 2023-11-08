"use strict";
//Solution
// Attack Classes
class AttackWithClub {
    attack() {
        return ' is attacking with a club';
    }
}
class AttackWithSword {
    attack() {
        return ' is attacking with a sword';
    }
}
class AttackWithBowAndArrow {
    attack() {
        return ' is shooting with a bow and arrow';
    }
}
// Defend Classes
class DefendWithShield {
    defend() {
        return ' is defending with a shield';
    }
}
class DefendWithArmor {
    defend() {
        return ' is defending with armor';
    }
}
class DefendWithTunic {
    defend() {
        return ' is defending with only a tunic...yikes!';
    }
}
// Abstract Character Class
class Character {
    constructor(_name, _gold = 0) {
        this._name = _name;
        this._gold = _gold;
        this.attackAbility$ = new AttackWithSword();
        this.defendAbility$ = new DefendWithArmor();
    }
    get name() {
        return this._name;
    }
    get gold() {
        return this._gold;
    }
    set attackAbility(attack) {
        this.attackAbility$ = attack;
    }
    set defendAbility(defend) {
        this.defendAbility$ = defend;
    }
    attack() {
        return this.name + this.attackAbility$.attack();
    }
    defend() {
        return this.name + this.defendAbility$.defend();
    }
    collectGold(amount) {
        this._gold += amount;
        console.log(`${this.name} has collected ${amount} gold bringing their total to ${this.gold}`);
    }
}
// Ogres - attack with a club and defend with a shield
class Ogre extends Character {
    constructor() {
        super(...arguments);
        this.attackAbility$ = new AttackWithClub();
        this.defendAbility$ = new DefendWithShield();
    }
}
// Peons - attack with a club and defend with a shield
class Peon extends Character {
    constructor() {
        super(...arguments);
        this.attackAbility$ = new AttackWithClub();
        this.defendAbility$ = new DefendWithShield();
    }
}
// Knights - attack with a sword and defend with armor
class Knight extends Character {
    constructor() {
        super(...arguments);
        this.attackAbility$ = new AttackWithSword();
        this.defendAbility$ = new DefendWithArmor();
    }
}
// Archers - attack with a bow and arrow and defend with a tunic
class Archer extends Character {
    constructor() {
        super(...arguments);
        this.attackAbility$ = new AttackWithBowAndArrow();
        this.defendAbility$ = new DefendWithTunic();
    }
}
function getRandomNumber() {
    return Math.floor(Math.random() * 25);
}
let shrek = new Ogre('Shrek');
let peon = new Peon('Beth');
let brian = new Knight('Brian');
let legolas = new Archer('Legolas');
let characters = [
    shrek, peon, brian, legolas
];
for (let char of characters) {
    console.log('---------------------------');
    console.log(char.name);
    console.log(char.attack());
    console.log(char.defend());
    char.collectGold(getRandomNumber());
    console.log('---------------------------');
}
