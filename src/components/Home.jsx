import React, { useEffect } from "react"
import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getForecastAction } from "../redux/actions"
import TodayForecast from "./TodayForecast"

function Home() {
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

          {homeState.forecast.length > 0 && (
            <div>
              <TodayForecast forecast={homeState.forecast[0]}></TodayForecast>

              <Card className="m-4 p-2 text-center">
                <div className="display-4">Advertise with us today!</div>
                <div className="display-4"> Call us on 0800 ITMAYRAIN</div>
              </Card>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
