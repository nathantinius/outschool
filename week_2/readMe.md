# Using Readline
To do this we are going to need to use a 3rd Party Package called "readline"

We can install readline by running the following command in the terminal\
`npm i -g readline`

The next step is to get the package into our code so that we can use it. This is a process called dependency injection and we do that by placing the following code at the top of our file. \
`const readline = require("readline")`

Lastly we need to initialize the readline code. With the following:\
`let rl = readline.createInterface(process.stdin, process.stdout);`

A link to the readline documentation can be found here:
https://nodejs.org/api/readline.html#class-interfaceconstructor