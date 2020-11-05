import React from "react";
import "./Login.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Button } from "@material-ui/core";
import { auth } from "./firebase";
import { provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIN = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Login">
      <div className="Login_container">
        <div className="login_text">
          <WhatsAppIcon />
          <h2>Sign in WhatsApp</h2>
          <Button onClick={signIN} type="submit">
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
