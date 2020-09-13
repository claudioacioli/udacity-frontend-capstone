const { getCoordsByCity, getWeatherByCoords, getImagesByCity } = require('../lib/api')

const 
  apiRoute = async (req, res) => {
  
    const city = "city" in req.query ? req.query.city.toString().trim() : ''
    const date = "date" in req.query ? req.query.date.toString().trim() : ''

    const geoResult = city.length
      ? await getCoordsByCity(city)
      : {}
  
    const { lat=0, lng=0 } = geoResult;
    const weatherResult = lat && lng 
      ? await getWeatherByCoords(lat, lng)
      : {}

    const images = await getImagesByCity(city)

    res.send({...geoResult, ...weatherResult, images})

  }
;

module.exports = {
  apiRoute
};
