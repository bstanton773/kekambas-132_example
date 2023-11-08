//Solution


// interfaces
interface Attackable{
    attack():string
}

interface Defendable{
    defend():string
}


// Attack Classes
class AttackWithClub implements Attackable{
    attack():string{
        return ' is attacking with a club'
    }
}

class AttackWithSword implements Attackable{
    attack():string{
        return ' is attacking with a sword'
    }
}

class AttackWithBowAndArrow implements Attackable{
    attack():string{
        return ' is shooting with a bow and arrow'
    }
}

// Defend Classes
class DefendWithShield implements Defendable{
    defend():string{
        return ' is defending with a shield'
    }
}

class DefendWithArmor implements Defendable{
    defend():string{
        return ' is defending with armor'
    }
}

class DefendWithTunic implements Defendable{
    defend():string{
        return ' is defending with only a tunic...yikes!'
    }
}


// Abstract Character Class
abstract class Character implements Attackable, Defendable{
    protected attackAbility$:Attackable = new AttackWithSword()
    protected defendAbility$:Defendable = new DefendWithArmor()
    
    constructor(private _name:string, private _gold:number = 0){}
    
    get name():string{
        return this._name
    }
    
    get gold():number{
        return this._gold
    }
    
    set attackAbility(attack:Attackable){
        this.attackAbility$ = attack
    }
    
    set defendAbility(defend:Defendable){
        this.defendAbility$ = defend
    }
    
    attack():string{
        return this.name + this.attackAbility$.attack()
    }
    
    defend():string{
        return this.name + this.defendAbility$.defend()
    }
    
    public collectGold(amount:number):void{
        this._gold += amount
        console.log(`${this.name} has collected ${amount} gold bringing their total to ${this.gold}`)
    }
}

// Ogres - attack with a club and defend with a shield
class Ogre extends Character {
    attackAbility$ = new AttackWithClub()
    defendAbility$ = new DefendWithShield()
}

// Peons - attack with a club and defend with a shield
class Peon extends Character {
    attackAbility$ = new AttackWithClub()
    defendAbility$ = new DefendWithShield()
}

// Knights - attack with a sword and defend with armor
class Knight extends Character {
    attackAbility$ = new AttackWithSword()
    defendAbility$ = new DefendWithArmor()
}

// Archers - attack with a bow and arrow and defend with a tunic
class Archer extends Character {
    attackAbility$ = new AttackWithBowAndArrow()
    defendAbility$ = new DefendWithTunic()
}


function getRandomNumber(){
    return Math.floor(Math.random() * 25)
}

let shrek = new Ogre('Shrek');
let peon = new Peon('Beth');
let brian = new Knight('Brian');
let legolas = new Archer('Legolas');

let characters: Character[] = [
    shrek, peon, brian, legolas
]

for (let char of characters){
    console.log('---------------------------');
    console.log(char.name)
    console.log(char.attack())
    console.log(char.defend())
    char.collectGold(getRandomNumber())
    console.log('---------------------------');
}