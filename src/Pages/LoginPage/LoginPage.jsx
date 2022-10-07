import {Link} from "react-router-dom";
import {Login} from "../../Components/Login/Login";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import './LoginPage.css'


const LoginPage = () => {


    return (
        <>
            <div className="body-login">
                <NavBar/>
                    <Container className="container-login">
                        <h1>Log In</h1>
                        <Login/>
                        <Button className="mt-2" variant="info">
                            <Link className="link-dark" to="/register">Or register</Link>
                        </Button>
                    </Container>
                <Footer/>
            </div>
        </>
    )
}
export default LoginPage;