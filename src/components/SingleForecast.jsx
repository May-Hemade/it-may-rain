import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { getDayName, getShortDate, nameCapitalized } from "../helper/forecast"

function SingleForecast({ forecast }) {
  return (
    <div>
      <Card className="m-4 p-4">
        <div className="d-flex justify-content-between p-2 align-items-center">
          <div>
            <div>{getDayName(forecast).toUpperCase()}</div>
            <div>{getShortDate(forecast).toUpperCase()}</div>
          </div>

          <div>
            <div className="d-flex justify-content-center align-items-center">
              <img
                width={100}
                height={100}
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              />
              <div className="weather-temperature-big-container">
                <span className="weather-temperature-big display-4">
                  {Math.round(forecast.main.temp)}°
                </span>
                /
                <span className="weather-temperature-min-big display-6">
                  {Math.round(forecast.main.temp_min)}°
                </span>
              </div>
            </div>
          </div>
          <div className="display-5 mr-2">
            {nameCapitalized(forecast.weather[0].description)}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SingleForecast
