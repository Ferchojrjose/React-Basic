import { heroes } from "../data/heroes"

export const getHeroeById = (id) => {

    //Retornar el heroe que buscamos.
    return heroes.find( hero => hero.id === id );
}
