import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // Renombrar
    // data:images despues de los dos puntos se pone el nuevo nombre
    const { data:images, loading } = useFetchGifs(category); //Custom hook

    // useEffect(() => {
    //     // getGifs(category).then(imgs => setImages(imgs))
    //     getGifs(category).then(setImages)
    //     // Se le manda un arreglo de dependencias, esto hace que solo se dispare
    //     // una sola vez. Para que el componente solo se renderice una vez
    // }, [category])



    // getGifs();

    return (
        <>
            <h3 className = "animate__animated animate__fadeIn">{category}</h3>

            {/* custom hook */}
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>

            {/* <div className='card-grid'>

                {
                    // Formas de mostrar titulos de las imagenes en una lista
                    // images.map(img => (
                    //     <li key={img.id}>{img.title}</li>
                    // ))

                    // images.map(({id, title}) => (
                    //     <li key={id}> {title}</li>
                    // ))

                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div> */}
        </>
    )
};
