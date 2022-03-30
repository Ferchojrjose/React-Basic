import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas de funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest) //Igualar Objetos
    })

    //Tarea
    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Fernando'

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({ //Igualar Objetos
            uid: 'ABC567',
            username: nombre
        });
    })
})