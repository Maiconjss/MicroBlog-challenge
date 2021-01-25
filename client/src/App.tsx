import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import Feed from './components/Feed/Feed';
import { ButtonLogin } from "./components/LoginButton/LoginButton";
import { LogoutButton } from "./components/LogoutButton/LogoutButton";

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
       <ButtonLogin />
       <LogoutButton />
       <Feed id={0} />
    </>
  );
};

export default App;
