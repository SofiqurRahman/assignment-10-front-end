import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import logo from '../../logos/Group 1329.png'
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "myVolunteerList" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div>
            <div class="text-center py-5"> 
      <img style={{height: '50px'}} src={logo} alt=""/>
            </div>
            <div class="loginForm text-center">
            <h1>Login With</h1>
            <button class="googleBtn my-3" onClick={handleGoogleSignIn}>Continue With Google</button>
            <p>Don't have an account?<a href="createAccount">create an account</a></p>
            </div>
            
        </div>
    );
};

export default Login;