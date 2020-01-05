const axios = require('axios')

const GetClima = async (lat, lon) => {

    const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat,
            lon,
            appid: '17ad02a2f52ded5049e103752f1fbde8',
            units: 'metric'
        }
    })

    return resp.data.main.temp
}

module.exports = {
    GetClima
}