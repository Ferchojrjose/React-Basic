import { UseCounter } from "../../hooks/UseCounter";
import { useFetch } from "../../hooks/useFetch"

export const MultiCustomHooks = () => {

  const { counter, increment } = UseCounter(1);

  const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  //Si la data es diferente de nulo, devulve la data[0]
  const { author, quote } = !!data && data[0]

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
            <blockquote className="blockquote text-end">
              <p className="mb-1"> {quote} </p>
              <footer className="blockquote-footer"> {author} </footer>
            </blockquote>
          )
      }

      <button onClick={() => increment()} className="btn btn-primary"> Next quote </button>
    </>
  )
}
