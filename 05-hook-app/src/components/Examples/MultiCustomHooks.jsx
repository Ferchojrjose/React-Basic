import { useFetch } from "../../hooks/useFetch"

export const MultiCustomHooks = () => {

  const { data, isLoading, error } = useFetch('https://www.breakingbadapi.com/api/quotes/1');

              //Si la data es diferente de nulo, devulve la data[0]
  const { author, quote} = !!data&&data[0]

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

      <button className="btn btn-primary"> Next quote </button>
    </>
  )
}
