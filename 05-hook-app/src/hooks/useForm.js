import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [form, setform] = useState(initialForm); //Valores del formulario

    /*
      Event es un objeto que tiene cada input o componente
      de HTML el cual contiene atributos como lo es el 'target',
      el target tambien contiene atributos que son los que se declaran
      por el programador.
    */
    const onInputChange = ({ target }) => {

        const { value, name } = target;

        setform({
            ...form,
            [name]: value
        });
    }

    //Resetear valores del formulario
    const onResetForm = () => {
        setform(initialForm);
    }

    return {
        form,
        onInputChange,
        onResetForm
    }
}
