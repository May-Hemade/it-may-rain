import React from "react"
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./TodayForecast.css"

export default function Headbar() {
  const homeState = useSelector((state) => state.home)

  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="/">
          <span>It MayRain</span>
          {homeState.forecast.length > 0 && (
            <img
              src={`http://openweathermap.org/img/wn/${homeState.forecast[0].weather[0].icon}.png`}
              width="30"
              height="30"
              className="d-inline-block align-top ml-2"
            />
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <div className="nav-link color-dark">Today</div>
            </Link>
            <Link to="/daily">
              <div className="nav-link">Daily</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
