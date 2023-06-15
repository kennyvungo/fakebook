import React from 'react'
import { useState } from 'react'
import * as sessionActions from "../../store/session";
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import logo from '../../assets/fblogo.svg'
import SignUpFormModal from '../SignupFormModal';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errors,setErrors] = useState([])

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({email,password}))
        .catch(async(res) => {
            let data;
            try {
                data = await res.clone().json();
            } catch {
              data = await res.text(); // Will hit this case if, e.g., server is down
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        })
    }

    return (
        <div className='logcontainer'>
            <div className='homeleft'>
                <img className='logo' src={logo}/>
                <p className="subheader"> Connect with friends and the world</p>
                <p className="subheader"> around you on Facebook.</p>
            </div>
            <div className='homeright'>
            <form className='logform' onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <ul>
                <label>
                    <input
                        className='email'
                        type="text"
                        value={email}
                        placeholder='Email or Phone Number'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                </label>
                </ul>
                <ul>
                <label>
                    <input
                        className='pw'
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                </label>
                </ul>
                <ul>
                <button className='logbutton'>Log In</button>
                </ul>
                <p className='forgot'>Forgot Password?</p>
            <SignUpFormModal/>
            </form>
            </div>
        </div>
        )
}

export default LoginFormPage