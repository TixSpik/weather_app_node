const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demmand: true
    }
}).argv

const location = argv.direccion

const getInfo = async (direction) => {
    try {
        const coordenadas = await lugar.GetLatitudLongitud(direction)
        const temp = await clima.GetClima(coordenadas.latitud, coordenadas.longitud)
        return `El clima de ${coordenadas.direction} es de ${temp} grados Celsius `
    } catch (error) {
        return console.log(`No se pudo determindar la teperatura de ${direction} `)
    }
}

getInfo(location).then(console.log).catch(console.log)


