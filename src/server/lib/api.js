const { getData } = require('./rest.js')

const 
  getGeolocationByCity = async city => {
    const username = process.env.API_USERNAME_GEONAMES
    const url = new URL(`http://api.geonames.org/searchJSON?q=${encodeURIComponent(city)}&maxRows=1&username=${username}`)
    const result = await getData(url)
    if("geonames" in result && result.geonames.length) 
      return result.geonames[0]
    return {}
  }
;

module.exports = {
  getGeolocationByCity
}
