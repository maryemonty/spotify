import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink, Router } from "react-router-dom"

function MyNav(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="gap-5">
                        <NavLink to='/discover'>TRENDING</NavLink>
                        <NavLink to='/discover'>PODCAST</NavLink>
                        <NavLink to='/discover'>MOODS AND GENRES</NavLink>
                        <NavLink to='/discover'>NEW RELEASES</NavLink>
                        <NavLink to='/discover'>DISCOVER</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav