import { useLocation, useNavigate } from "react-router-dom";
import { UseForm } from "../hooks/UseForm";
import queryString from "query-string";
import { getHeroeByName } from "../helpers";
import { HeroeCard } from "../components";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroeByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = UseForm({
    searchText: q,
  });


  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };


  return (
    <>
      <h1> Search </h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching..</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>
        </div>


        <div className="col-7">
          <h4> Results</h4>
          <hr />


          {
            // (q === '')
            //   ? <div className="alert alert-primary"> Search a hero. </div>
            //   : (heroes.length === 0)
            //   && <div className="alert alert-danger"> No hero with <b> {q} </b> </div>
          }

          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero.
          </div>


          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No hero with <b> {q} </b>
          </div>


          {
            heroes.map(hero => (
              <HeroeCard key={hero.id} heroe={hero} />
            ))
          }

        </div>

      </div>
    </>
  )
}
