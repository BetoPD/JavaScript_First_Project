const user = {
    name: "None",
    message: [],
    liked: false
};


let menu = true;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

while (menu) {

    let input;

    rl.question('Please enter your name: ', function(userInput) {
      input = userInput;
      rl.close();
    });
    
    user.name = input;
    console.log("What you want to do ", user.name, "?");
    console.log("1) Generate a randmo message");
    console.log("2) View you past messages");
    console.log("3) Exit");
    
    let input2;
    rl.question('A: ', function(userInput) {
      input2 = userInput;
      rl.close();
    });
    
    switch(input2) {
        case "1":
            break;
        case "2":
            break;
        case "3":
            menu = false;
            break;
        default:
            console.log("Wrong input, try again");
            break;
    }

}