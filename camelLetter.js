let string = "letters";

const camelLetters = () => {
    let newString = "";
    let newArr = [];

    for (let letter of string) {
        if (string[letter] % 2 === 0) {
            newString += letter.toUpperCase();
        } 
        else {
            newString += letter
        }
    }
    
    return newArr.push(newString);
}

console.log(camelLetters(string));