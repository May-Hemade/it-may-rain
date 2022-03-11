export const GET_FORECAST = "GET_FORECAST"
export const SET_FORECAST_ERROR = "GET_FORECAST_ERROR"
export const STOP_FORECAST_LOADING = "STOP_FORECAST_LOADING"

export const getForecastAction = (latitude, longitude) => {
  return (dispatch) => {
    setTimeout(async () => {
      try {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_APIKEY}`
        )
        if (response.ok) {
          let result = await response.json()
          console.log("FORCAST IN ACTION CREATOR", result)
          dispatch({
            type: GET_FORECAST,
            payload: result.list,
          })
          dispatch({
            type: STOP_FORECAST_LOADING,
          })
        } else {
          console.log("error happened fetching the jobs")

          dispatch({
            type: SET_FORECAST_ERROR,
          })
          dispatch({
            type: STOP_FORECAST_LOADING,
          })
        }
      } catch (error) {
        console.log(error)

        dispatch({
          type: SET_FORECAST_ERROR,
        })
        dispatch({
          type: STOP_FORECAST_LOADING,
        })
      }
    }, 1000)
  }
}
