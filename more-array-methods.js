// array.map() review
const names = ["anne", "barry", "chloe"];
const bigNames = names.map(name => name.toUpperCase());
console.log(bigNames);
console.log(names);


const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

// .filter()
const myFavoriteThings = things.filter(thing => thing.favorite);
console.log("My Favorite Things: " + JSON.stringify(myFavoriteThings));

const thingsBelowFiftyPoints = things.filter(thing => thing.points < 50)
console.log("Things below 50 Points: " + JSON.stringify(thingsBelowFiftyPoints));

// .find()
const idOfFour = things.find(thing => thing.id === 4);
console.log("ID of Four: " + JSON.stringify(idOfFour));

const selectThingByID = (id) => {
    return things.find(thing => thing.id === id);
}
console.log("Selected Thing: " + JSON.stringify(selectThingByID(2)));

const isFeatured = things.find(thing => thing.featured);
console.log("Featured: " + JSON.stringify(isFeatured));