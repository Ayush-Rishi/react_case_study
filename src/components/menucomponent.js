import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav} from "react-bootstrap";

function MenuComponent(props) {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
   if ( localStorage.getItem("isLoggedIn")) {
        return (

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>mStock App</Navbar.Brand>
                <nav className='navbar navbar-default'>
                    {isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
                    <Nav.Link href="/companies">Companies</Nav.Link>
                    {!isLoggedIn && <Nav.Link href="/watchlist">Watch List</Nav.Link>}
                   {!isLoggedIn &&  <Nav.Link href="/compareperformance">Compare Performance</Nav.Link>}
                   {!isLoggedIn && <Nav.Link href="/logout">Logout</Nav.Link>}
                </nav>

            </Navbar>

        )
   }
    else {
        return (
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand>mStock App</Navbar.Brand>
                <nav className='navbar navbar-default'>
                     <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/companies">Companies</Nav.Link>
                   
                </nav>

                </Navbar>
        )
    }

}

export default MenuComponent
