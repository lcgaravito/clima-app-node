const axios = require('axios');

const getPlaceLatLon = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '29d2da71a8msh08a1824f17d1b83p1c209ajsncf183a6c1f76' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontraron resultados para  ${dir}`);
    }
    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}
module.exports = {
    getPlaceLatLon
}