import { byId, bySelector } from './by';

const

  wallElement = bySelector(".bg--city"),
  placeImgElement = byId('place-img'),
  nameElement = byId('name'),
  tempElement = byId('temp'),
  weatherElement = byId('weather'),
  weatherImgElement = byId('weather-img'), 

  render = async result => {
    wallElement.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 40%), url(${result.images[1].url})`;
    placeImgElement.src = result.images[0].url;
    nameElement.textContent = result.city_name;
    weatherElement.textContent = result.weather.description;
    weatherImgElement.src = `https://www.weatherbit.io/static/img/icons/${result.weather.icon}.png`
    tempElement.textContent = result.temp;
  }
;

export default {
  render
}