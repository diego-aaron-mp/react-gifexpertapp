// Custom Hook
// EL nombre del archivo debe de empezar con use

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';
;


// Indica a otros componentes que lo utilicen para indicar un cambio
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Los efectos no pueden ser async
    // Solo se dispara cuando cambia la categoria
    // dispara una renderizacion
    useEffect(() => {
        // Cuerpo de peticion http

        getGifs(category)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            })

    }, [category])

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3],
    //         loading: false
    //     })
    // }, 3000);

    // retornamos un objeto
    return state; // {data: [], loading: true}
}