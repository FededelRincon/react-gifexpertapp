import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

            //estaba en el return pero no hay forma de comentarlo
            // <p>
            //     {/* este p fue solo para testing, xq no queremos que aparezca lo q escribimos en el input como un p */}
            //     {inputValue} 
            // </p>
    return (
        <form onSubmit={ handleSubmit }>
            
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Search ..."
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
