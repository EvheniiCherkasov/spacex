import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import DragonTabs from "./components/DragonTabs/DragonTabs"
import {useEffect, useState} from "react";
import DragonService from "./service/dragonService";
import Spinner from "./components/Spinner";

function App() {

    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        const service = new DragonService();
        service.allDragons().then((item) => {
            setDragons(item);
        })
    }, []);

    if (!dragons.length) return (
        <Spinner/>
    )

    return (
        <div className="body">
            <div style={{flex: '1'}}>
                <NavBar/>
                <DragonTabs dragons={dragons}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

