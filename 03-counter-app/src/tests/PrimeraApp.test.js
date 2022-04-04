import React from 'react';
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en </PrimeraApp>', () => {

    test('debe de mostrar <PrimeraApp/>', () => {

        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot()
    });


    test('Debe crear el subitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}
            />
        )

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitulo);

    })
});