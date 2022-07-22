export async function getUserSavedTracks() {
  let token = window.localStorage.getItem("token");
  let response = await fetch("https://api.spotify.com/v1/me/tracks", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  let data = response.json();
  return data;
}

export function getUserTopArtists() {
  let token = window.localStorage.getItem("token");
  return fetch("https://api.spotify.com/v1/me/top/artists", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });
}
