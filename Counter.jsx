// import { useState } from "react";
// function Counter() {
//     const [count, setCount] = useState(0);
//     function handleClick() {
//         setCount(count + 1);
//     }
//     return (
//         <>
//             <h2>Count: {count}</h2>
//             <button onClick={handleClick}>
//                 Increase
//             </button>
//         </>
//     );
// }
// export default Counter;

//STATES CAN BE CHANGED WITH THE HELP OF CALLBACK...
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); //==>useState is hook, creates state...

    function handleOne() {
        setCount(count + 1);
    }

    function handleFive() {
        setCount(count + 5);
    }

    function handleTen() {
        setCount(count + 10);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>

            <button onClick={handleOne}>+1</button>
            <button onClick={handleFive}>+5</button>
            <button onClick={handleTen}>+10</button>

            {count === 0 && <p>Start counting!</p>}

            {count > 0 && count < 10 && (
                <p>count</p>
            )}

            {count >= 10 && count < 20 && (
                <p>count</p>
            )}

            {count >= 20 && (
                <p>count</p>
            )}
        </>
    );
}

export default Counter;