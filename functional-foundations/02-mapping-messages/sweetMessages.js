const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

// const sweetMessages = [
//     'how are you doing, sweetie?',
//     'what are you up to, sweetie?',
//     'would you like to get a bite later, sweetie?',
// ];

// const sweetMessage = [];

// for (let i = 0; i < messages.length; i++) {
//     const newMessage = `${messages[i]}, sweetie`;
//     sweetMessage.push(newMessage);
// };

// console.log(sweetMessage);

const sweetMessages = messages.map((message) => `${message}, sweetie?`);
console.log(sweetMessages);