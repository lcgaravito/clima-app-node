const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// place.getPlaceLatLon(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     });

// weather.getWeather(40.75, -74)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     });

const getInfo = async(direccion) => {
    try {
        const data = await place.getPlaceLatLon(direccion);
        const temp = await weather.getWeather(data.lat, data.lon);
        return `El clima de ${data.direccion} es de ${temp}`;
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);