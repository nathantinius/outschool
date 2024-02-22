/*  What we are going to learn: Strings, Variables, Functions */

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

//  🚨  WE CAN'T DO THIS!! Remeber const is Immutable meaning it can't be changed
hello = "Hello Nathan!"; // 💣

//  🛖  Create your let variable and call it "name"
let name;

console.log(name);