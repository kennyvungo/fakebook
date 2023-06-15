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
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
            <label>
                Email
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label>
                Password
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <label>
                First Name
                <input
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
            </label>
            <label>
                Last Name
                <input
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                required
                />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    </>
    );
}

export default SignUpFormPage;