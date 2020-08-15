import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify
        .getPlaylist("c947db4cf9e14e27873ba72a9018bb71")
        .then((response) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* spotify logo */}

      {/* Login with spotify button  */}

      {/* Sidebar */}
    </div>
  );
}

export default App;
