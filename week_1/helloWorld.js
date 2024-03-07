







/*  What we are going to learn: Strings, Variables, Functions */

/*  🦊  Strings are what we call the text elements that we 
        want to use in Software Engineering */
    
"Hello!!" // 🚨 Notice the quotation marks >> " "




















/*  🦊  Variables are split into two groups
        const and let.
        
        A const is a constant this means it
        never changes. In computer science this
        is referred to as Immutable.
        
        A let on the otherhand is what is known
        as mutable. This means we can change it
        as we go.
        
        Lets build a few examples.
*/

//  🛖  Create your const variable and call it "hello"
const hello = "Hello World!";

//  🛖  Create your let variable and call it "myName"
let myName;


// console.log() is a function that is built in to our machines systems
console.log(hello);
console.log(myName);














/*  🦊  Functions: a function is a self-contained 
        block of code that performs a specific task 
        or set of tasks.
        
        addNumbers is the name of the function.
        
        It takes two parameters, num1 and num2, which 
        represent the numbers you want to add.
        
        Inside the function, the + operator is used to 
        add the two numbers, and the result is stored 
        in the variable sum.
        
        The return statement is used to send the result 
        back when the function is called.
        
        The function is then called with the arguments 5 
        and 10, and the result is printed to the console.
        
        Feel free to experiment with different numbers or 
        modify the function based on your needs!
*/

function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

// Example usage
var result = addNumbers(5, 10);
console.log(result); // Output: 15






