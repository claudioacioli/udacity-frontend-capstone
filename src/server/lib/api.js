const { getData } = require('./rest.js')
const { makeStartEndDates, formatDate } = require('./utils')

const 

  WEATHERBIT_URL_ICON = `https://www.weatherbit.io/static/img/icons`,

  getGeolocationByCity = async city => {
    const username = process.env.API_USERNAME_GEONAMES
    const url = new URL(`http://api.geonames.org/searchJSON?q=${encodeURIComponent(city)}&maxRows=1&username=${username}`)
    const result = await getData(url)
    
    if("geonames" in result && result.geonames.length)
      return result.geonames[0]

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
    return data.length ? data[0] : [];
  },

  getWeatherByCoords = async (lat, lng) => {
    const url = `/current?lat=${lat}&lon=${lng}`
    const result = await getDataFromWeatherBit(url)
    return {
      weather_icon_url: `${WEATHERBIT_URL_ICON}/${result.weather.icon}.png`,
      ...result
    }
  },

  getHistoricalWeatherByCoords = async (lat, lng, date) => {
    const { start, end } = makeStartEndDates(date)
    const url = `/history/daily?lat=${lat}&lon=${lng}&start_date=${formatDate(start)}&end_date=${formatDate(end)}`
    const result = await getDataFromWeatherBit(url)
    return result
  }

  getDataFromPixabay = async q => {
    const key = process.env.API_KEY_PIXABAY 
    const url = new URL(`https://pixabay.com/api/?key=${key}&image_type=photo&q=${q}&category=places&per_page=3`)
    const result = await getData(url)
    return result
  },

  getImagesByCity = async city => {
    const data = await getDataFromPixabay(city)
    const hits = "hits" in data && data.hits.length ? data.hits : []

    return hits.map(({ webformatURL, webformatWidth, webformatHeight }) => (
      { "url" : webformatURL, "width": webformatWidth, "height": webformatHeight}
    ))
  }
;

module.exports = {
  getCoordsByCity,
  getWeatherByCoords,
  getHistoricalWeatherByCoords,
  getImagesByCity
}
