const readline = require("readline");

const fakePassword = "Password1234!"

// First we instanciate the function
let rl = readline.createInterface(process.stdin, process.stdout); 

let passwordInput = rl.question("What is your password? ", function(input){
    checkPassword(input, fakePassword);
    rl.close();
    return input
})

function checkPassword(input, password){
    if (input === password) {
        console.log("success");
    } else {
        console.log("failed");
    }
}

// const checkPassword = (input, password) => {
    
// }

//checkPassword(passwordInput, fakePassword);



