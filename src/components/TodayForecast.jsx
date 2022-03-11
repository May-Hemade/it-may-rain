import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { getShortTime } from "../helper/forecast"
import "./TodayForecast.css"

function TodayForecast({ forecast }) {
  return (
    <div>
      <Card className="m-4">
        <Container>
          <Row>
            <Col md={5}>
              <div className="p-4">
                <h5>Today's Weather</h5>
                <div className="h5">{getShortTime(forecast)}</div>
                <div className="d-flex justify-content-center align-items-center p-4">
                  <img
                    width={100}
                    height={100}
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  />
                  <div className="weather-temperature-big-container p-2">
                    <div className="weather-temperature-big display-4">
                      {Math.round(forecast.main.temp)}°
                    </div>
                    <div className="weather-temperature-realfeel">
                      RealFeel {Math.round(forecast.main.feels_like)}°
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={7} className="p-4">
              <div className="weather-info-row d-flex justify-content-between">
                <span className="weather-info-label">Min Temperature</span>
                <span className="weather-info-value">
                  {forecast.main.temp_min}
                </span>
              </div>
              <div className="weather-info-row d-flex justify-content-between">
                <span className="weather-info-label">Max Temperature</span>
                <span className="weather-info-value">
                  {forecast.main.temp_max}
                </span>
              </div>
              <div className="weather-info-row d-flex justify-content-between">
                <span className="weather-info-label">Humidity</span>
                <span className="weather-info-value">
                  {forecast.main.humidity}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  )
}

export default TodayForecast
