import React from "react";
import SideBarNav from "../SideBarNav";
import MainBody from "../MainBody";
import "./app.css";

function App() {
  let data = {
    jumpBackInPlaylist: [
      {
        name: "Hip Hop Mix",
        coverUrl:
          "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b",
        artists: ['The Lumineers", "The Notorious B.I.G.", "and..."],'],
      },
      {
        name: "Chill Playlist",
        coverUrl:
          "https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e",
        artists: ["Bush", "The Smashing Pumpkins", "No Doubt", "and..."],
      },

      {
        name: "Drive Playlist",
        coverUrl:
          "https://i.scdn.co/image/ab6761610000e5eb4d709a7f0c971c81aeeb6e75",
        artists: ["Goose", "Bruce Springsteen", "Billy Joel", "and..."],
      },
      {
        name: "90's Playlist",
        coverUrl:
          "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b",
        artists: ["Goose", "Bruce Springsteen", "Billy Joel", "and..."],
      },
    ],

    forYouPlaylist: [
      {
        name: "Vanilly Ice",
        coverUrl:
          "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b",
        artists: ['The Lumineers", "The Notorious B.I.G.", "and..."],'],
      },
      {
        name: "Milli Vanilli",
        coverUrl:
          "https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e",
        artists: ["Bush", "The Smashing Pumpkins", "No Doubt", "and..."],
      },
      {
        name: "Drive Playlist",
        coverUrl:
          "https://i.scdn.co/image/ab6761610000e5eb4d709a7f0c971c81aeeb6e75",
        artists: ["Goose", "Bruce Springsteen", "Billy Joel", "and..."],
      },
    ],
  };

  let playlists = [
    "Staind Radio",
    "I Love My '90's Hip-Hop",
    "Chill Mix",
    "Hanging Out & Relaxing",
    "Cranked Up",
    "Your Top Songs 2020",
    "The Wedding Singer Soundtrack",
    "Discover Weekly",
    "Liked from Radio",
  ];

  return (
    <div id="main" className="">
      <SideBarNav playlists={playlists} className="left" />
      <MainBody
        jumpBackInPlaylist={data.jumpBackInPlaylist}
        forYouPlaylist={data.forYouPlaylist}
      />
    </div>
  );
}

export default App;
