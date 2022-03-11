import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import getDayName from "../helper/forecast"

function SingleForecast({ forecast }) {
  return (
    <div>
      <Card className="m-4">
        <Container>
          <Row>
            <Col md={5}>
              <div>
                <h5>{getDayName(forecast)}</h5>
                <div>{forecast.dt_txt}</div>
                <div className="d-flex justify-content-center">
                  <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  />
                  <div className="weather-temperature-big-container">
                    <div className="weather-temperature-big">
                      {forecast.main.temp}
                    </div>
                    <div className="weather-temperature-realfeel">
                      RealFeel {forecast.main.feels_like}
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={7} className="pl-4">
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

export default SingleForecast
