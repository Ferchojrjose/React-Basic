import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']; 

    if (!validPublishers.includes(publisher)) { //* Si el publisher no es válido
        throw new Error(`Publisher "${publisher}" is not valid by Fernando`);
    }

    return heroes.filter(hero => hero.publisher === publisher); //* Retornar un arreglo con los héroes que coincidan con el publisher

}
