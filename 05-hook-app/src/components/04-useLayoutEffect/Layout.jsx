import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { UseCounter } from "../../hooks/UseCounter";
import { useFetch } from "../../hooks/useFetch";

export const Layout = () => {

    const { counter, increment } = UseCounter(1);

    const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //Si la data es diferente de nulo, devulve la data[0]
    const { author, quote } = !!data && data[0]

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {

        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });

    }, [quote])



    return (
        <>
            <h1>BreakingBad Quotes </h1>
            <hr />

            {

                (isLoading)
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote style={{ display: 'flex' }} className="blockquote text-end">
                            <p ref={pRef} className="mb-1"> {quote} </p>
                            <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>
                    )
            }

            <button onClick={() => increment()} className="btn btn-primary"> Next quote </button>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
