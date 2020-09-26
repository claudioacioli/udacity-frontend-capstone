const { getCoordsByCity, getHistoricalWeatherByCoords, getImagesByCity } = require('../lib/api')

const 

  apiRoute = async (req, res) => {
  
    const city = "city" in req.query ? req.query.city.toString().trim() : ''
    const start = "start" in req.query ? req.query.start.toString().trim() : ''
    const end = "end" in req.query ? req.query.end.toString().trim() : ''

    const startDate = new Date(Number(start))
    const endDate = new Date(Number(end))

    const geoResult = city.length
      ? await getCoordsByCity(city)
      : {}
 
    const { lat=0, lng=0 } = geoResult;
    const weatherResult = lat && lng && startDate
      ? await getHistoricalWeatherByCoords(lat, lng, startDate)
      : {}

    const images = await getImagesByCity(city)

    res.send({...geoResult, ...weatherResult, images})

  },

  notFoundRoute = (req, res) => {
    res.type('text/plain')
    res.send('Ops, where are you?\nNot Found!')
  }
;

module.exports = {
  apiRoute,
  notFoundRoute
};
