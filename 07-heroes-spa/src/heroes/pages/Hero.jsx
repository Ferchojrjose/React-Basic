import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router"
import { getHeroById } from "../helpers";

export const Hero = () => {

  const navigate = useNavigate(); //* Hook para navegar entre rutas

  const params = useParams(); //* Hook para obtener los parámetros de la URL
  const { id } = params; //* Obtenemos el parámetro id

  const hero = useMemo(() => getHeroById(id), [id]); //* Obtenemos el héroe por su id


  //* Función para regresar a la página anterior
  const handleReturn = () => {
    navigate(-1); //* Navegamos a la página anterior
  }


  if (!hero) {
    return (<Navigate to="/marvel" />); //* Redireccionamos a la página de Marvel si no existe el héroe
  }


  return (
    <div className="row mt-5">

      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5>Characters</h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={handleReturn} //* Función para regresar a la página anterior
        >
          Back
        </button>
      </div>

    </div>
  )
}
