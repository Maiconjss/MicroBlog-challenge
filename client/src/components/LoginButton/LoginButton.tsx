import React from "react";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../../assets/logo.png';
import "./Login.css";

export const ButtonLogin: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <div className="loginContainer">
          <div className="loginContent">
            <img src={Logo} alt="logo image" className="logo"/>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          Start
        </Button>
        </div>
        </div>
      )}
    </>
  );
};

export default ButtonLogin;
