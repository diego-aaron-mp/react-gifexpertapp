import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    // El inputValue es el valor actualizado que la persona escribio
    // const [inputValue, setInputValue] = useState(); Esto es un error porque deja undefined
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // Para prevenir el comportamiento por defecto del form
        // Para que no se refresque la pagina al dar enter
        e.preventDefault(); 

        if(inputValue.trim().length > 2){
            // no tenemos el acceso como tal a las categorias
            // por eso lo hacemos asi
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        // El fragment no es necesario cuando ya hay un
        // elemento que agrupe varios elementos
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
};

// Validar que la funcion setcategories sea requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

