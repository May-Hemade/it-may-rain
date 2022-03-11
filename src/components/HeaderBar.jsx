import React from "react"
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom"

export default function Headbar() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    // navigate(`/search/${data.search}`)
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">It MayRain</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <div className="nav-link">Today</div>
            </Link>
            <Link to="/weekly">
              <div className="nav-link">Weekly</div>
            </Link>
          </Nav>
          <Form onSubmit={handleSubmit(onSubmit)} inline>
            <FormControl
              type="text"
              input
              {...register("search", { required: true })}
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
