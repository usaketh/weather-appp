import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';


function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'e1f9856a6d15e9f1568acb603a66c20d';
  
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
      setError(null);

    } catch (error) {
      setError('Error fetching weather data. Please try again.');
      setWeatherData(null);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  }

  

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={city}
            placeholder='Enter city name'
            onChange={(e) => setCity(e.target.value)}
        />

        <button type='submit'>Get Weather</button>

      </form>
      <Weather weatherData={weatherData} error={error} />

    </div>
    
  );
}

export default App;
