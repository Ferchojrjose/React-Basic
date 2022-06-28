import { useState } from 'react';
import { useEffect } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    console.log(coords);

    useEffect(() => {
        //Se monta componente

        const onMouse = ({ x, y }) => {
            setCoords({
                x,
                y
            });
        }
        window.addEventListener('mousemove', onMouse);

        return () => {
            //Se desmonta componente

            window.removeEventListener('mousemove', onMouse);

        }
    }, [])




    return (
        <>
            <h3>Usuario existente.</h3>
        </>
    )
}
