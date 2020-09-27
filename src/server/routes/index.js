const { getCoordsByCity, getHistoricalWeatherByCoords, getImagesByCity } = require('../lib/api')
const { formatDate } = require('../lib/utils')
const { v4: uuidv4 } = require('uuid')

const 

  travels = {},

  readTravels = async (req, res) => {
    res.send(
      Object
        .keys(travels)
        .map(id => travels[id])
    )
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

    const id = uuidv4()
    const travel = {
      api_id: id,
      start: formatDate(startDate),
      end: formatDate(endDate), 
      ...geoResult, 
      ...weatherResult, 
      images
    }

    travels[id] = travel
    res.send(travel)
  },

  deleteTravel = (req, res) => {
    const id = req.params.id.toString().trim()
    delete travels[id]
    res.status(204).send()
  },

  notFound = (req, res) => {
    res.type('text/plain')
    res.send('Ops, where are you?\nNot Found!')
  }
;

module.exports = {
  readTravels,
  createTravel,
  deleteTravel,
  notFound
};
