import React, { useState } from "react";
import { useDispatch} from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

const SignUpFormPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name,setFirstName] = useState("");
    const [last_name,setLastName] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
            setErrors([]);
            return dispatch(sessionActions.signup({ email, password,first_name,last_name}))
            .catch(async (res) => {
            let data;
            try {
              // .clone() essentially allows you to read the response body twice
                data = await res.clone().json();
            } catch {
              data = await res.text(); // Will hit this case if, e.g., server is down
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
            });
    }

    return (
        <div className='modal'>
            <h1 className='signupheader'>Sign Up</h1>
            <h2 className='signupsub'>Its quick and easy.</h2>
            <form className='signupform' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
                <div className="name">
                    <input
                    className="fname"
                    placeholder="First Name"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    />
                    <input
                    className="lname"
                    placeholder="Last Name"
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    />
                </div>
                <input
                className='emailinput'
                placeholder="Mobile number or email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input
                className="passinput"
                placeholder="New password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <p>People who use our service may have uploaded your contact information to Facebook.</p>
                <p> Learn more.</p>
                <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
            <button className="signupbutton" type="submit">Sign Up</button>
        </form>
    </div>
    );
}

export default SignUpFormPage;