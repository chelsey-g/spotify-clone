import React from "react";
import "./sideBar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
// import { LibraryMusicIcon } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="spotify-logo.png" alt="spotify logo" />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      {/* <SidebarOption Icon={LibraryMusicIcon} title="Your Library" /> */}
      <h3>
        <b>PLAYLISTS</b>
      </h3>
    </div>
  );
}

export default Sidebar;
