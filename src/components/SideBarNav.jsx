import React from "react";
import "./SideBarNav.css";
import { MdHomeFilled } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function SideBarNav({ playlists }) {
  return (
    <div className="side-bar-nav">
      <img
        alt="Spotify Logo"
        className="spotify-logo-sidebar"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
      />
      <nav className="side-bar-nav-cont">
        <ol>
          <li>
            <MdHomeFilled className="nav-icon" />

            <Link to="/">Home</Link>
          </li>
          <li>
            <AiOutlineSearch className="nav-icon" /> Search
          </li>
          <li>
            <BiLibrary className="nav-icon" /> Your Library
          </li>
        </ol>
      </nav>

      <nav className="side-bar-nav-cont">
        <ol>
          <li>
            <AiOutlinePlusSquare className="nav-icon" /> Create Playlist
          </li>
          <li>
            <AiOutlineHeart className="nav-icon" />
            <Link to="{LikedSongsView}">Liked Songs</Link>
          </li>
        </ol>
      </nav>

      <div className="border-line">
        <hr className="nav-line" />
      </div>
      <nav className="side-bar-nav-cont-2">
        <ol>
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <Link className="nav-icon" to={`/playlist/${playlist.id}`}>
                {playlist.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* <div className="footer-nav">
        <img className="footer-album-cover" alt="footer art"></img>
        <div className="footer-album-info">Nirvana, In Utero</div>
        <span classname="heart-react-icon"></span>
      </div> */}
    </div>
  );
}
