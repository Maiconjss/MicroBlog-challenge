import React from "react";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && 
      <Button 
      variant="contained"
      color="primary"
      onClick={() => logout()}>
        Log Out
      </Button>}
    </>
  );
};

export default LogoutButton;
