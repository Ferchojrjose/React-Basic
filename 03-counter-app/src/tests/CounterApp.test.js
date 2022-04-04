import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp';

describe('Pruebas en </CounterApp>', () => {

    let wrapper  = shallow(<CounterApp value={10} />);

    beforeEach(() => { //Se ejecuta antes de cada test
        wrapper = shallow(<CounterApp value={10} />);
    })

    test('debe de mostrar <CounterApp/>', () => {

        expect(wrapper).toMatchSnapshot();

    });


    test('Debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={100} />)
        const conterText = wrapper.find('h2').text().trim();
        expect(conterText).toBe('100');

    })


    test('Debe incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const conterText = wrapper.find('h2').text().trim();
        expect(conterText).toBe('11');

    })


    test('Debe decrementar con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const conterText = wrapper.find('h2').text().trim();
        expect(conterText).toBe('9');

    })


    test('Debe colocar el valor por defecto de reset', () => {

        const wrapper = shallow(<CounterApp value={105} />)

        //hacer Click boton +1
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const conterText = wrapper.find('h2').text().trim();
        expect(conterText).toBe('105');

    })

});