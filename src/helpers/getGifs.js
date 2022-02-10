// Helpers. Funciones que hacen un cierto trabajo en especifico
// rebibir y procesar argumento y hacer un return


export const getGifs = async (category) => {
    // El encodeURI reemplaza los espacios
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=7GdPsLMBReQiZ3KeDWrL2POpN4coDCim`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
        // Va a retornar un nuevo objeto
        return {
            id: img.id,
            title: img.title,
            // El signo de interrogacion indica que si vienen las imagenes
            // entonces se utiliza
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}