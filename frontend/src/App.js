import LoginFormPage from "./Components/LoginFormPage";
import React from "react";
import {Route,Switch} from 'react-router-dom'
import SignUpFormPage from "./Components/SignupFormPage";

function App() {
  return (
    <>
      <h1>fakebook</h1>
      <Switch>
        <Route exact path="/login">
          <LoginFormPage/>
        </Route>
        <Route exact path="/signup">
          <SignUpFormPage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
