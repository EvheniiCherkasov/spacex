import {Link} from "react-router-dom";
import {SignUp} from "../../Components/SignUp/SignUp";
import NavBar from "../../Components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import './RegisterPage.css'

const RegisterPage = () => {
    return (
        <>

            <div className="body-register">
                <NavBar/>
                <Container className="container-register">
                    <h1>Register</h1>
                    <SignUp />
                    <Button className="mt-2" variant="info">
                        <Link className="link-dark" to="/login">Register</Link>
                    </Button>
                </Container>
                <Footer/>
            </div>
        </>
    )
}
export default RegisterPage;