import {Forms} from "../Form/Form";
import {useDispatch} from "react-redux";
import {setUser} from "../../Store/Slices/UserSlices"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user'))
    }

    return (
        <Forms
            titel="Sign In"
            handleClick={handleLogin}
        />
    )
}

export {Login}