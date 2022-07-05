import { useMemo } from "react";
import { useState } from "react";
import { UseCounter } from "../../hooks/UseCounter"

const heavyStuff = (iterationNumber = 20) => {

    for (var i = 10; i < iterationNumber; i++) {
        console.log('ahi vamos');
    }

    return `${iterationNumber} iteraciones realizadas`;
}



export const MemoHook = () => {

    const { counter, increment } = UseCounter(10);
    const [show, setShow] = useState(true)

    const memorize =  useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small> {counter} </small> </h1>
            <hr />
            <h4> {memorize} </h4>
            <button onClick={() => increment()} className="btn btn-primary"> + 1</button>

            <button onClick={() => setShow(!show)} className="btn btn-outline-primary">
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
