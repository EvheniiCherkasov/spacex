import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import TabsCard from "./components/tabsCard"
import {useEffect, useState} from "react";
import DragonService from "./service/dragonService";


function App() {

    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        const service = new DragonService();
        service.allDragons().then((item) => {
            setDragons(item);
        })
    }, []);

    if (!dragons.length) return 'loading'


    return (
        <div className="body">
            <div style={{flex: '1'}}>
                <NavBar/>
                <TabsCard dragons={dragons}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

