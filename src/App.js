import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Headbar from "./components/HeaderBar"
import Home from "./components/Home"
import WeeklyForecast from "./components/WeeklyForecast"

function App() {
  return (
    <BrowserRouter>
      <Headbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<WeeklyForecast />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
