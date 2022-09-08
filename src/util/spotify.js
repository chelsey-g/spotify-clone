import { useEffect, useState } from "react";

const CLIENT_ID = "552224aa73d341988e49f4cdb6c6b45e";
// const CLIENT_ID = "bea8ca08bfa04f209a891fb011576542";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export function Login() {
  let scopes = [
    "user-top-read",
    "user-library-read",
    "playlist-read-private",
    "user-modify-playback-state",
    "user-read-playback-state",
  ];
  return (
    <a
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
        " "
      )}&response_type=${RESPONSE_TYPE}`}
    >
      Login to Spotify
    </a>
  );
}

export function Logout() {
  const logout = () => {
    window.localStorage.removeItem("token");
  };
  return <button onClick={logout}>Logout</button>;
}

/**
 * Checks to see if Spotify has redirected here after authenticating
 */
export function useSpotify() {
  let [token, setToken] = useState(null);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      let tok = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      if (tok) {
        console.log({ tok });
        window.localStorage.setItem("token", tok);
      }

      window.location.hash = "";
    }
    request("https://api.spotify.com/v1/me").then((data) => {
      setToken(true);
    });
  }, []);
  return token;
}

function request(url, options = {}) {
  let token = window.localStorage.getItem("token");
  Object.assign(options, {
    method: options?.method || "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (options.method !== "GET") {
    Object.assign(options, { body: JSON.stringify(options.body) });
  }
  console.log("request", url, options);
  return fetch(url, options)
    .then(handleErrors)
    .then((res) => {
      if (res.headers.has("Content-Type")) {
        return res.json();
      }
    });
}

function handleErrors(response) {
  if (response.status === 401) {
    window.localStorage.removeItem("token");
    throw Error(response.statusText);
  }
  return response;
}

export async function getUserSavedTracks() {
  return request("https://api.spotify.com/v1/me/tracks");
}

export function getPlaylists() {
  return request("https://api.spotify.com/v1/me/playlists");
}

export function getPlaylist(id) {
  return request(`https://api.spotify.com/v1/playlists/${id}`);
}

export function getLikedSongs() {
  return request("https://api.spotify.com/v1/me/tracks");
}

export function getUserTopArtists() {
  return request("https://api.spotify.com/v1/me/top/artists");
}

export function getMyAlbums() {
  return request(`https://api.spotify.com/v1/me/albums`);
}

export function getAlbum(id) {
  return request(`https://api.spotify.com/v1/albums/${id}`);
}

export function getAlbumTracks(id) {
  return request(`https://api.spotify.com/v1/albums/${id}/tracks`);
}

export function getAvailableDevices() {
  return request("https://api.spotify.com/v1/me/player/devices");
}

export function getUserProfile() {
  return request("https://api.spotify.com/v1/me");
}

export function getSearchItems(q, type) {
  return request(`https://api.spotify.com/v1/search?q=${q}&type=${type}`);
}

export function getBrowseCategories() {
  return request("https://api.spotify.com/v1/browse/categories");
}

export async function startPlayback(uri, deviceId = null) {
  if (!deviceId) {
    let res = await getAvailableDevices();
    // console.log(res);
    deviceId = res.devices.find((d) => d.name.includes("MacBook")).id;
  }
  return request(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {
      method: "PUT",
      body: {
        uris: [uri],
      },
    }
  );
}
