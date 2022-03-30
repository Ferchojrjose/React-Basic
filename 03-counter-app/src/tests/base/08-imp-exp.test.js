import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('Debe retornar un heroe', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heoreData = heroes.find(h => h.id == id);

        expect(heroe).toEqual(heoreData)
    })


    test('Debe retornar undefined si un heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined)

    })

    test('Debe retornar lista de heroe DC', () => {

        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        const heoreData = heroes.filter(h => h.owner == owner);
        expect(heroe).toEqual(heoreData)
    })

    test('Mismo tamaño de arreglo', () => {

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        const heoreData = heroes.filter(h => h.owner == owner);
        expect(heroe.length).toBe(heoreData.length)

    })
})