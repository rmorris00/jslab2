let user = prompt("what is your name");
let grant = "grant";
let userHealth = 40;
let grantHealth = 10;
let grantRespawn = 2;
let game = prompt("do you want to play a game")

if (game === "yes") {



    while (userHealth >= 1 && grantHealth >= 1 && grantRespawn > 0) {

        if (userHealth >= 1 && grantHealth >= 1 && grantRespawn > 0) {

            userHealth -= Math.floor(Math.random() * 2) + 1;
            grantHealth -= Math.floor(Math.random() * 2) + 1;

            console.log(`${user} has ${userHealth} health left`);
            console.log(`${grant} has ${grantHealth} health left`);

        }

        if (grantHealth <= 0 && grantRespawn > 0 && userHealth >= 1) {



            console.log("you have won this battle, but Grant respawned");
            grantHealth += 10;
            grantRespawn--;

        } else if (grantHealth <= 0 && grantRespawn <= 0 && userHealth >= 1) {
            console.log("congrats, you won");
            break;
        }
        if (userHealth <= 0 && grantHealth >= 1 && grantRespawn > 0) {
            console.log("sorry, you lost");
            break;

        }

    }

    while (userHealth >= 1 && grantHealth >= 1 && grantRespawn === 0) {


        if (userHealth >= 1 && grantHealth >= 1 && grantRespawn === 0) {

            userHealth -= Math.floor(Math.random() * 2) + 1;
            grantHealth -= Math.floor(Math.random() * 2) + 1;

            console.log(`${user} has ${userHealth} health left`);
            console.log(`${grant} has ${grantHealth} health left`);

        }


    }
    if (grantHealth <= 0 && grantRespawn <= 0 && userHealth >= 1) {
        console.log("congrats, you won");

    } else if (userHealth <= 0 && grantHealth >= 1 && grantRespawn > 0) {
        console.log("sorry, you lost");


    }
}