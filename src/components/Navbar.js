import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
const NavBar = () => {

	return (
		<div>

			<div className='wrapper'>
				<Navbar bg="primary" variant="dark" style={{ paddingLeft: '3rem' }}>

					<Navbar.Brand href="#home">Twittjobs</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About Us</Nav.Link>
						<Nav.Link href="#pricing">Contact Us</Nav.Link>
						<NavDropdown title="Sign In" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/userlogin">User</NavDropdown.Item>
							<NavDropdown.Item href="/institutelogin">Institute</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Sign Up" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/userregister">User</NavDropdown.Item>
							<NavDropdown.Item href="/instituteregister">Institute</NavDropdown.Item>
						</NavDropdown>

					</Nav>

				</Navbar>
			</div>

			{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">Navbar</a>


				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/userlogin">UserLogin</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/userregister">UserRegister</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/signin">User Signin</NavLink>
						</li>
					</ul>

				</div>
			</nav> */}
		</div>
	)
}
export default NavBar;