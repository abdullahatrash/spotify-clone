import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("I have a Token =>", token);
  }, []);

  return (
    <div className="App">
      {token ? <Player /> : <Login />}
      {/* spotify logo */}

      {/* Login with spotify button  */}

      {/* Sidebar */}
    </div>
  );
}

export default App;
