const lightSwitch = {
    switchState: "on",
    flipSwitch() {
        if (this.switchState === "on") {
            this.switchState = "off"
        } else {
            this.switchState = "on";
        }
    }
};

console.log(lightSwitch.switchState)
lightSwitch.flipSwitch();
console.log(lightSwitch.switchState);
lightSwitch.flipSwitch();
console.log(lightSwitch.switchState);

// or
// this just overrides the origins flipSwitch function
lightSwitch.flipSwitch = function() {
    return this.switchState === "on" ? this.switchState = "off" : this.switchState = "on";
};

lightSwitch.flipSwitch();
console.log(lightSwitch.switchState);
lightSwitch.flipSwitch();
console.log(lightSwitch.switchState);


const canVote = (age) => {
    return age >= 18 ? true : false
};

console.log(canVote(19));
console.log(canVote(17));