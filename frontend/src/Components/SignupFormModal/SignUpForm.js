import React, { useState } from "react";
import { useDispatch} from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

const SignUpFormPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name,setFirstName] = useState("");
    const [gender,setGender] = useState("");
    const [last_name,setLastName] = useState("");
    const [birthday,setBirthday] = useState();
    const [errors, setErrors] = useState([]);
    const [year,setYear] = useState("");
    const [day,setDay] = useState("");
    const [month,setMonth] = useState("");
    const days = [...Array(31).keys()];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Oct","Nov","Dec"]
    const years = [...Array(2023).keys()].reverse()
    const handleSubmit = (e) => {
        setBirthday(`${year}-${month}-${day}`)
        e.preventDefault();
            setErrors([]);
            return dispatch(sessionActions.signup({ email, password,first_name,last_name}))
            .catch(async (res) => {
            let data;
            try {
                data = await res.clone().json();
            } catch {
                data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
            });
    }

    return (
        <div className='modal'>
            <div className="modalhead">
                <h1 className='signupheader'>Sign Up</h1>
                <h2 className='signupsub'>Its quick and easy.</h2>
            </div>
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
                <div className="birthday">
                <select className="birth month" id="month" defaultValue= {"Jan"} onChange={e => setMonth(e.target.value)}
                >
                {months.map(month => <option>{month}</option>)}
                </select>
                <select className="birth" id="days" defaultValue={1} onChange={e => setDay(e.target.value)}>
                {days.map(day => <option> {day}</option>)}
                </select>
                <select className="birth" id="year" defaultValue={2023} onChange={e => setYear(e.target.value)} >
                    {years.map(year => <option>{year}</option>)}
                </select>
                </div>

                <div className="gender">
                    <label>
                        <div className="genderitem">Female
                        <input type="radio" name="gender" value="Female"
                        onChange={(e) => setGender(e.target.value)} 
                        />
                        </div>
                    </label>
                    <label>
                        <div className="genderitem">Male
                        <input type="radio" name="gender" value="Male"
                        onChange={(e) => setGender(e.target.value)} 
                        />
                        </div>
                    </label>
                    <label>
                        <div className="genderitem">Custom

                        <input type="radio" name="gender" value="Male"
                        onChange={(e) => setGender(e.target.value)} 
                        />
                        </div>
                    </label>
                </div>


                <div className="disclaim">
                <p>People who use our service may have uploaded your contact information to Facebook.</p>
                <a>Learn More</a>
                <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                </div>
            <button className="signupbutton" type="submit">Sign Up</button>
        </form>
    </div>
    );
}

export default SignUpFormPage;