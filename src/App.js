import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Headbar from "./components/HeaderBar"

function App() {
  return (
    <BrowserRouter>
      <Headbar />

      <Routes></Routes>
    </BrowserRouter>
  )
}

export default App
