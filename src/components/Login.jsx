import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login";
import env from '../config/env';
import { UserContext } from "../UserContext";
import './Login.css'

function Login() {

    const { setUser } = useContext(UserContext)
  const responseFacebook = (response) => {
    let {name, email, picture} = response;
    setUser({name, email, picture})
  };

  return (
    <div className= 'login'>
      <FacebookLogin
        appId={env.fbAppId}    
        fields="name,email,picture"
        callback={responseFacebook}
        textButton= {'LOGIN CON FACEBOOK'}
      />
    </div>
  );
}

export default Login;
