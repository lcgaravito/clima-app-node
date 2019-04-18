const axios = require('axios');

const getWeather = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1ac7a8c9937dc1bff6720a9ff2d57fe&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}