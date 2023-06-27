import LoginFormPage from "./Components/LoginFormPage";
import React from "react";
import { useSelector } from "react-redux";
import {Route,Switch} from 'react-router-dom'
import ProfileShow from "./Components/Profile/profileshow";
import SignUpFormPage from "./Components/SignupFormModal/SignUpForm";
import Navigation from "./Components/Navigation";
import Splash from "./Components/Splash/splash";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./Components/Profile/profile";
function App() {
  const loggedIn = useSelector(state=>state.session.user);
  let display = <LoginFormPage/> 

  return (
    <>
      <Switch>
        <Route exact path ="/users/:userId">
          <ProfileShow/>
        </Route>
        <Route exact path="/login">
          <LoginFormPage/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/">
          <Splash/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
