import { UseCounter } from "../../hooks/UseCounter"

//Importar react 'rafc'
export const WithCustomHook = () => {

    const { counter, increment, decrement, reset } = UseCounter(); //Desestructuracion.

    return (
        <>

            <h1> Counter With Hook: {counter}  </h1>
            <hr />

            <button onClick={() => increment(2)} className="btn btn-primary" > +1 </button>
            <button onClick={reset} className="btn btn-primary"> Reset </button>
            <button onClick={decrement} className="btn btn-primary"> -1 </button>

        </>
    )
}
