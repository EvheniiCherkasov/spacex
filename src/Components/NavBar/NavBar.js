import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return (
        <>
            <Navbar className="mb-4" expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand style={{fontSize: '30px'}}>Dragons</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;