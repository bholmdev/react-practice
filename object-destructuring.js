const personOne = {
    name: "Kyle",
    age: 24,
    address: {
        city: "Somewhere",
        state: "One of them"
    }
};

const personTwo = {
    // comment out to test default below
    // name: "Sally",
    age: 32,
    favoriteFood: "watermelon",
    address: {
        city: "Somewhere else",
        state: "Another one of them"
    }
};

const personThree = {
    age: 45,
    favoriteFood: "tacos"
}

const personFour = { ...personOne, ...personThree }

const { name: firstName = "Unknown", age, favoriteFood = "none listed", address: { city, ...rest } } = personTwo;
console.log("First Name: " + firstName);
console.log("Age: " + age);
console.log("Favorite Food: " + favoriteFood);
console.log("City: " + city);
console.log("The rest: " + JSON.stringify(rest));
console.log("Person Four: " + JSON.stringify(personFour));

const printUser = (user) => {
    console.log(user);
};

const printUserSpecifics = ({ name, age, favoriteFood = "none Listed" }) => {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Favorite Food: " + favoriteFood);
}

printUser("User One: " + JSON.stringify(personOne));
printUserSpecifics(personOne);
printUserSpecifics(personTwo);