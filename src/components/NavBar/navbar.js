import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container>
                <Nav >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
