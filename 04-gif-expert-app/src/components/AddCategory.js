import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setcategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //evita el recargo de la pagina

        //Agregar componente a la lista, con un 'enter'
        if (inputValue.trim().length > 2) {
            setcategories(cats => [inputValue, ...cats,]);
            setinputValue('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            
            />
        </form>
    )
}

//Hacer un parametro requerido
AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}