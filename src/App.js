import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CreateAccount from './components/CreateAccount/CreateAccount';
import MyVolunteerList from './components/MyVolunteerList/MyVolunteerList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Database from './components/Database/Database';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/createAccount">
              <CreateAccount />
            </Route>
            <PrivateRoute path="/myVolunteerList">
              <MyVolunteerList/>
            </PrivateRoute>
            <Route path="/database">
              <Database />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
