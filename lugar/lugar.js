const axios = require('axios')

const GetLatitudLongitud = async (location) => {
    const resp = await axios({
        "method": "GET",
        "url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "d7d1c349a4msh9d7f184460a4b33p1c1873jsn8519e55cd280"
        }, "params": {
            "location": location
        }
    })

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${location}`)
    }
    const data = resp.data.Results[0]
    const direction = data.name
    const latitud = data.lat
    const longitud = data.lon

    return {
        direction,
        latitud,
        longitud
    }
}

module.exports = {
    GetLatitudLongitud
}