import {Route, Routes} from "react-router-dom";
import './Pages/HomePage/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {

    return (
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/login" element={<LoginPage/>} />
            <Route exact path="/register" element={<RegisterPage/>} />
        </Routes>
    );
}

export default App;

