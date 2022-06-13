function mu (command) {
    // room contains a command and a number, separated by space. The command can be:
    // •	"potion"
    // o	You are healed with the number in the second part. But your health cannot exceed your initial health (100).
    // o	First print: "You healed for {amount} hp."
    // o	After that, print your current health: "Current health: {health} hp."
    // •	"chest"
    // o	You've found some bitcoins, the number in the second part.
    // o	Print: "You found {amount} bitcoins."
    // •	In any other case, you are facing a monster, which you will fight. The second part of the room contains the attack of the monster. You should remove the monster's attack from your health. 
    // o	If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
    // o	If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you've manage to reach
    







health = 100

bitcoin = 0

let a = command.slice("|")


for(let i = 0; i < a.length; i++) {
   let c = a[i] 
   const  f = c.split(" ")
   if (f[0] === "potion") {
       health += Number(f[1])
   }
} 
for()
// if (a == "potion") {

//     health +=
// }



}