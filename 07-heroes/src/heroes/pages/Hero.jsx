import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {

  const { id } = useParams(); //Parametros Custom Hook.
  const navigate = useNavigate(); // Hook de navegacion.

  const hero = useMemo(() => getHeroeById(id), [id]); //Custom Hook para cuando cambie el id.

  //Metodo para regresar.
  const onBack = () => {
    navigate(-1); //Retorna a la página anterior.
  };


  if (!hero) { //Verificar si existe el heroe
    //Si no existe.
    return <Navigate to={"/marvel"} />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">

      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>


      <div className="col-8">
        <h3> {hero.superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
        </ul>


        <h5 className="mt-3"> Characters </h5>
        <p> {hero.characters} </p>


        <button
          onClick={onBack}
          className="btn btn-outline-primary"
        >
          Back
        </button>

      </div>

    </div>
  )
}
