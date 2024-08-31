// challenge
const message = 'your phone number is contained somewhere in the digits of Pi';
const surprisedReaction = () => console.log(':o');
const smoothReaction = () => console.log('B)');
const saySomethingAndReact = (msg = 'you forgot to submit a message') => {
    console.log(msg);
    return (reaction) => {
        reaction();
    };
}

// add the inputs here
saySomethingAndReact(message)(smoothReaction);

const greetUser = (userName) => {
    console.log("Hi there, " + userName);
}
greetUser("Sam");

const greetUser2 = (userName, msg = "Hi there, ") => {
    console.log(msg + userName);
}
greetUser2("Sam");
greetUser2("Sam?", "Where are you ");

const logMessage = (msg) => {
    console.log(msg);
}
const greetUser3 = (func, userName) => {
    func("Hi there, " + userName)
}
greetUser3(logMessage, "Sam");

// anyonymous function
const greetUser4 = (func, userName) => {
    func("Hi there, " + userName);
}
greetUser4((msg) => console.log(msg), "Sam");

const sum = (a, b) => a + b;
const addSum = sum(2, 3);
console.log(addSum);

// return other functions
const logMessage2 = (punctuation) => {
    return (msg) => console.log(msg + punctuation);
}
const logConfused = logMessage2("??!?");
console.log(logConfused);
logConfused("What the heck");
const logExcited = logMessage2("!!!!!!");
logExcited("Actually, this is pretty cool");
logMessage2("??!?")("What the heck");
logMessage2("!!!!!!")("This is pretty cool");