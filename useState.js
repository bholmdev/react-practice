import { useState } from "react";

const App = () => {
    const [myCounter, setMyCounter] = useState(12);
    // const myCounter = retValFromUseState[0];
    // const setMyCounter = retValFromUseState[1];

    return (
        <div onClick={() => setMyCounter(myCounter + 1)}>
            Count: {myCounter}
        </div>
    );
};

export default App;