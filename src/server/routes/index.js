const { getCoordsByCity, getHistoricalWeatherByCoords, getImagesByCity } = require('../lib/api')
const { formatDate } = require('../lib/utils')

const travels = [];

const 

  readTravels = async (req, res) => {
    res.send(travels)
  },

  createTravel = async (req, res) => {

    const { city='', start=0, end=0 } = req.body

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

    const travel = {
      start: formatDate(startDate),
      end: formatDate(endDate), 
      ...geoResult, 
      ...weatherResult, 
      images
    }

    travels.push(travel)
    res.send(travel)
  },

  notFound = (req, res) => {
    res.type('text/plain')
    res.send('Ops, where are you?\nNot Found!')
  }
;

module.exports = {
  readTravels,
  createTravel,
  notFound
};
