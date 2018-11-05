// Exercice 2

function Warrior(name, force, life) {
    this.name = name;
    this.force = force;
    this.life = life;
    this.describe = function () {
        var description = this.name + " a " + this.life + " points de vie, " +
            this.force + " en force";
        return description;
    };
    this.attack = function (target) {
        if (this.life > 0) {
            var damages = this.force;

            console.log(this.name + " attaque " + target.name + " et lui fait " + damages + " points de dégâts");
            target.life -= damages;
            if (target.life > 0) {
                console.log(target.name + " a encore " + target.life + " points de vie");
            } else {
                target.life = 0;
                console.log(target.name + " est mort !");
            }
        } else {
            console.log(this.name + " ne peut pas attaquer : il est mort...");
        }
    }
}


function Wizard(name, force, magic, life) {
    this.name = name;
    this.force = force;
    this.magic = magic;
    this.life = life;
    this.describe = function () {
        var description = this.name + " a " + this.life + " points de vie, " +
            this.force + " en force et " + this.magic + " en magie";
        return description;
    };
    this.attack = function (target) {
        if (this.life > 0) {
            var damages = this.force;
            console.log(this.name + " attaque " + target.name + " et lui fait " + damages + " points de dégâts");
            target.life -= damages;
            if (target.life > 0) {
                console.log(target.name + " a encore " + target.life + " points de vie");
            } else {
                target.life = 0;
                console.log(target.name + " est mort !");
            }
        } else {
            console.log(this.name + " ne peut pas attaquer : il est mort...");
        }
    }
    this.heal = function () {
        if (this.magic >= 20) {
            var healValue = 10;
            console.log(this.name + " se soigne et gagne " + healValue + " points de vie");
            this.life += healValue;
            this.magic -= 20;
            console.log(this.name + " a désormais " + this.life + " points de vie et " + this.magic + " en magie");
        } else {
            console.log(this.name + " n'a pas assez de magie pour se soigner");
        }
    }
}

var obiOne = new Warrior("Obi One", 20, 500);
var darkSidius = new Warrior("Dark Sidius", 30, 400);

var gandalf = new Wizard("Gandalf", 40, 100, 300);


console.log(darkSidius.attack(gandalf));
console.log(obiOne.attack(gandalf));
console.log(gandalf.heal());
console.log(gandalf.attack(darkSidius));

// for (var i = 0; i < 40; i++) {
//     if ((obiOne.life > 0) && (darkSidius.life > 0)) {
//         if (i % 2 == 0) {
//             console.log(darkSidius.attack(obiOne));
//         } else {
//             console.log(obiOne.attack(darkSidius));
//         }
//     } else {
//         break;
//     }
// }