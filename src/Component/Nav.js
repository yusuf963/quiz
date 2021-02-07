import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Nav.css'
import img from '../assets/logo.png'

const Navigation = () => {
  return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand><Link to='/'> <img style={{ width: '70px', height: '50px', marginLeft: '10px' }} src={img} alt="quiz-logo" /></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link> <Link className='link-item' to="/quiz/home">Home</Link> </Nav.Link >
        <Nav.Link><Link className='link-item' to="/quiz/quiz" >Quiz</Link ></Nav.Link >
        <Nav.Link><Link className='link-item' to="/quiz/about">About</Link ></Nav.Link >
      </Nav>
      <Nav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default Navigation

