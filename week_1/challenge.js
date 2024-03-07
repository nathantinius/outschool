/*  We will need to access readline by installing the package
    Open the terminal and type: npm i readline
*/
const readline = require("readline");

/*  Lets write a spoof login program putting what we learned 
    about strings, variables and functions into practice.
*/

/*  🛖  Lets write a variable to store a fake password as   
        a string.
*/


/*  🚨  readline is what is known as a 3rd-Party package. We 
        use these to build additional functionality into our 
        programs. We don't always have to build everything 
        ourselves.
*/

// First we instanciate the function
let rl = readline.createInterface(process.stdin, process.stdout); 

// Next we will use the built in question function
// This function takes two arguments (string, function (input))
// The fuction argument is receiving the user input as an argument 
let name = rl.question("What is your name? ", function (name){
    return name;
});


/*  🛖  Now we need a way to get our password input from our 
        fake user. We can use the example above as a template.
        lets store the value in a variable called passwordInput.
*/



/*  Last let's create a function to compare the fake password with
    the users passwordInput

    if the input is the same console.log("success")
    else console.log("failed")
*/



/*  To test the program open the terminal and run the file
    on Windows node .\challenge.js
    on Mac node ./challenge.js
*/



