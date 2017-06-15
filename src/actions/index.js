import axios from 'axios';
const API_KEY = '7349bcbde71c819ee8362d31bdd37251';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  console.log('Request: ', request);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}