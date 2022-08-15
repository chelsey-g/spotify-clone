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
        <a>
          <MdHomeFilled className="nav-icon" />

          <Link to="/">Home</Link>
        </a>
        <a>
          <AiOutlineSearch className="nav-icon" /> Search
        </a>
        <a>
          <BiLibrary className="nav-icon" /> Your Library
        </a>
      </nav>
      <nav className="side-bar-nav-cont">
        <a>
          <AiOutlinePlusSquare className="nav-icon" /> Create Playlist
        </a>
        <a>
          <AiOutlineHeart className="nav-icon" /> Liked Songs
        </a>
      </nav>

      <div className="border-line">
        <hr className="nav-line" />
      </div>
      <nav className="side-bar-nav-cont-2">
        {playlists.map((playlist) => (
          <a className="nav-icon">{playlist}</a>
        ))}
      </nav>

      {/* <div className="footer-nav">
        <img className="footer-album-cover" alt="footer art"></img>
        <div className="footer-album-info">Nirvana, In Utero</div>
        <span classname="heart-react-icon"></span>
      </div> */}
    </div>
  );
}
