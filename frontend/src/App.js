import LoginFormPage from "./Components/LoginFormPage";
import React from "react";
import { useSelector } from "react-redux";
import {Route,Switch} from 'react-router-dom'
import SignUpFormPage from "./Components/SignupFormModal/SignUpForm";
import Navigation from "./Components/Navigation";
function App() {
  const loggedIn = useSelector(state=>state.session.user);
  console.log("loggedin:",loggedIn);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LoginFormPage/>
        </Route>
        {/* <Route exact path="/signup">
          <SignUpFormPage/>
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
