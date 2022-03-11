import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Headbar from "./components/HeaderBar"
import Home from "./components/Home"
import DailyForecast from "./components/DailyForecast"

function App() {
  return (
    <BrowserRouter>
      <Headbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily" element={<DailyForecast />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
