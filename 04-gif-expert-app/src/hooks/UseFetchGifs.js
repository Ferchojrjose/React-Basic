import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/Getgif';


export const UseFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //Recargar este metodo solo una vez
    useEffect(() => {
        getGifs(category) //Es una promesa (async), retorna las imagenes.
            .then(imgs => {

                setTimeout(() => { //Tiempo de espera.
                    setstate({
                        data: imgs,
                        loading: false
                    });
                }, 2000);

            })
    }, [category]);


    return state;

}
