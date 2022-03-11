import React, { useEffect } from "react"
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getForecastAction } from "../redux/actions"
import SingleForecast from "./SingleForecast"

function DailyForecast() {
  const homeState = useSelector((state) => state.home)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getForecastAction(35, 139))
  }, [dispatch])

  return (
    <Container>
      <Row>
        <Col>
          {homeState.isLoading && (
            <div className="d-flex justify-content-center m-4">
              <Spinner variant="primary" animation="border" />
            </div>
          )}

          {homeState.isError && (
            <div className="d-flex justify-content-center m-4">
              <Alert variant="danger">Could not load Forecast, try again</Alert>
            </div>
          )}

          {homeState.forecast.length > 0 &&
            homeState.forecast.map((fcst) => (
              <SingleForecast forecast={fcst}></SingleForecast>
            ))}
        </Col>
      </Row>
    </Container>
  )
}

export default DailyForecast
