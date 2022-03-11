import {
  GET_FORECAST,
  SET_FORECAST_ERROR,
  STOP_FORECAST_LOADING,
} from "../actions"
import { initialState } from "../store"

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        forecast: action.payload,
      }

    case SET_FORECAST_ERROR:
      return {
        ...state,
        isError: true,
      }

    case STOP_FORECAST_LOADING:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default homeReducer
