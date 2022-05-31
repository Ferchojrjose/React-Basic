import React from 'react';
import PropTypes from 'prop-types';
import { UseFetchGifs } from '../hooks/UseFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = UseFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__bounce animate__delay-1s'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid'>
                {
                    data.map(img => ( //Rcorrer arreglo de imagenes
                        <GifGridItem
                            key={img.id}
                            {...img} //Mandar como oparametro 
                        />
                    ))
                }
            </div>
        </>
    )
}

//Obligar parametros (PropTypes)
GifGrid.propType = {
    category: PropTypes.string.isRequired
}
 