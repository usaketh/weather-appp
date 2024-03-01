import React from 'react'

const Weather = ( {weatherData, error} ) => {
  return (
        <>
            {error && <p>{error}</p>}
            {
                weatherData && (
                    <div>
                        <h3>Weather in {weatherData.name}</h3>
                        <p>Temperature: {weatherData.main.temp} °C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Weather: {weatherData.weather[0].description}</p>
                    </div>
                )
            }
        
        </>
  )
}

export default Weather