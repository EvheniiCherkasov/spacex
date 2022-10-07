import {Navigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";
import DragonTabs from "../../Components/DragonTabs/DragonTabs";
import Footer from "../../Components/Footer/Footer";
import {useEffect, useState} from "react";
import DragonService from "../../Service/DragonService";
import Spinner from "../../Components/Spinner";
import {useAuth} from "../../Hooks/Use-Auth";
import {removeUser} from "../../Store/Slices/UserSlices";
import {Button} from "react-bootstrap";


const HomePage = () => {
    const [dragons, setDragons] = useState([]);
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        const service = new DragonService();
        service.allDragons().then((item) => {
            setDragons(item);
        })
    }, []);

    if (!dragons.length) return (
        <Spinner/>
    )

    return isAuth ? (
        <>
            <div className="body">
                <div style={{flex: '1'}}>
                    <NavBar/>
                    <DragonTabs dragons={dragons}/>
                </div>
                <Button onClick={() => dispatch(removeUser())} >Log out from {email}</Button>
                <Footer/>
            </div>
        </>
    ) : (
        <Navigate to="/login" />
    )
}
export default HomePage;