import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hook";
import { HeroCard } from "../components/HeroCard"

import queryString from "query-string"; //* Librería para parsear query strings
import { getHeroesByName } from "../helpers/getHeroesByName";



export const Search = () => {

    const navigate = useNavigate(); //* Hook para navegar entre rutas
    const location = useLocation(); //* Hook para obtener la ubicación actual

    const { q = '' } = queryString.parse(location.search); //* Parsea la query string de la ubicación actual

    const heroes = getHeroesByName(q); //* Función que filtra los heroes por nombre


    const { searchText, onInputChange } = useForm({
        searchText: q
    });


    const handleSubmit = (e) => {

        e.preventDefault();
        // if (searchText.trim().length <= 1) return;

        //* Hook en el cual se utiliza el hook useNavigate para navegar a la ruta con el query string
        navigate(`?q=${searchText.toLowerCase()}`);

    }


    return (
        <>
            <h1>Search</h1>
            <hr />


            <div className="row">

                <div className="col-5">

                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Search hero"
                            className="form-control"
                            autoComplete="off"
                            name="searchText"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-2" type="submit">
                            Search
                        </button>
                    </form>

                </div>

                <div className="col-7">

                    <h4>Result</h4>
                    <hr />

                    {
                        (q === '')
                            ?
                            <div className="alert alert-primary"> Search a hero </div>
                            : (heroes.length === 0) &&
                            <div className="alert alert-danger"> No hero found with the name: <b>{q}</b></div>
                    }


                    {
                        heroes.map((hero) => (

                            <HeroCard key={hero.id} hero={hero} />

                        ))
                    }

                </div>

            </div>

        </>
    )
}
