import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Forms} from "../Form/Form";
import {setUser} from "../../Store/Slices/UserSlices"


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {

            })
            .catch(console.error)
    }

    return (
        <Forms
            titel="Register"
            handleClick={handleRegister}
        />
    );
};

export {SignUp};