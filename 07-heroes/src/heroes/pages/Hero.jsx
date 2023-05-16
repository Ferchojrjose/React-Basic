import { Navigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const Hero = () => {

  //Parametros Custom Hook.
  const { id } = useParams();

  const hero = getHeroeById(id); //Obtener Heroe.

  if (!hero) { //Verificar si existe el heroe
    //Si no existe.
    return <Navigate to={"/marvel"} />
  }

  return (
    <>
      <h1> {hero.superhero} </h1>
    </>
  )
}
