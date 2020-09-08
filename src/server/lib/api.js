const { getData } = require('./rest.js')

const 

  getGeolocationByCity = async city => {
    const username = process.env.API_USERNAME_GEONAMES
    const url = new URL(`http://api.geonames.org/searchJSON?q=${encodeURIComponent(city)}&maxRows=1&username=${username}`)
    const result = await getData(url)
    if("geonames" in result && result.geonames.length){ 
      console.log(result.geonames[0])
      return result.geonames[0]
    }
    return {}
  },

  getCoordsByCity = async city => {
    const { lng=0, lat=0, countryCode, countryName, name } = await getGeolocationByCity(city)
    return {lng, lat, countryCode, countryName, name}
  },

  getDataFromWeatherBit = async path => {
    const key = process.env.API_KEY_WETHER_BIT
    const url = new URL(`https://api.weatherbit.io/v2.0${path}&key=${key}`)
    const result = await getData(url)
    const data = result && "data" in result && result.data ? result.data : []
    return data[0]
  },

  getWeatherByCoords = async (lat, lng) => {
    const url = `/current?lat=${lat}&lon=${lng}`
    return await getDataFromWeatherBit(url)
  }
;

module.exports = {
  getCoordsByCity,
  getWeatherByCoords
}
