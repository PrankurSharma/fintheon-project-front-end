import React, { /*useRef,*/ useState } from 'react';
import Axios from 'axios';
import { baseUrl } from './baseUrl';
import { token } from './token';
import './App.css';
import ImplementCharts from './ImplementCharts';
import CityInfo from './CityInfo';
import WeatherInfo from './WeatherInfo';
import { backendUrl } from './backendUrl';

function App() {
  const [filled, set_filled] = useState(false);
  const [city, set_city] = useState("");
  const [chartData, set_chartData] = useState({});
  const [cityData, set_cityData] = useState({});
  const [weatherData, set_weatherData] = useState({});
  const [click, set_click] = useState(false);
  //const cache = useRef({});

  function fetchData() {
    const url = baseUrl + city + '/?token=' + token;
    Axios.post(backendUrl + '/api/fetch', {
      url: url
    }).then((response) => {
      if(response.data.message){
        alert("Record doesn't exist");
      }
      else{
        set_chartData(response.data.data.forecast.daily);
        set_cityData({
          "City": response.data.data.city.name,
          "URL": response.data.data.city.url,
          "AQI": response.data.data.aqi,
          "Dominent Pollutant": response.data.data.dominentpol
        });
        set_weatherData(response.data.data.iaqi);
        set_filled((fill) => !fill);
        set_city("");
        set_click(true);
      }
    });
    /*function clearStorage() {
      let session = sessionStorage.getItem('register');
      if(session == null){
        localStorage.clear();
      }
      sessionStorage.setItem('register', 1);
    }
    window.addEventListener('load', clearStorage);

    if(JSON.parse(localStorage.getItem(url) === null)) {
      Axios.get(url).then((response) => {
        console.log("Api call executed");
        localStorage.setItem(url,  JSON.stringify(response.data.data));
        set_chartData(JSON.parse(localStorage.getItem(url)).forecast.daily);
        set_cityData({
          "City": JSON.parse(localStorage.getItem(url)).city.name,
          "URL": JSON.parse(localStorage.getItem(url)).city.url,
          "AQI": JSON.parse(localStorage.getItem(url)).aqi,
          "Dominent Pollutant": JSON.parse(localStorage.getItem(url)).dominentpol
        });
        set_weatherData(JSON.parse(localStorage.getItem(url)).iaqi);
        set_filled((fill) => !fill);
        set_city("");
        set_click(true);
      }).catch(() => {
        alert("Record doesn't exist.");
      });
    }
    else{
      console.log("Cache executed");
      set_chartData(JSON.parse(localStorage.getItem(url)).forecast.daily);
        set_cityData({
          "City": JSON.parse(localStorage.getItem(url)).city.name,
          "URL": JSON.parse(localStorage.getItem(url)).city.url,
          "AQI": JSON.parse(localStorage.getItem(url)).aqi,
          "Dominent Pollutant": JSON.parse(localStorage.getItem(url)).dominentpol
        });
        set_weatherData(JSON.parse(localStorage.getItem(url)).iaqi);
        set_filled((fill) => !fill);
        set_city("");
        set_click(true);
    }*/
  }

  return (
    <div className="App">
      <h1 className='head'> AQI PORTAL </h1>
      <div className='form'>
        <h2> Search AQI Of a City </h2>
        <input value={city} placeholder='Enter Name of the City' onChange={(e) => {
          set_city(e.target.value);
        }} />
        <button onClick={fetchData}> Submit </button>
      </div>
      <div>
        {click && <h1> Results </h1>}
        <div className='container'>
          {click && <CityInfo myData={cityData} />}
          {click && <WeatherInfo myData={weatherData} />}
        </div>
        {click && <h1> Air Forcast </h1>}
        {click && <ImplementCharts myData={chartData} filled={filled} />}
      </div>
    </div>
  );
}

export default App;
