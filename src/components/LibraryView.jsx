import "./LibraryView.css";
import UserMenuButton from "./UserMenuButton";
import { Link } from "react-router-dom";
import LargeCard from "../components/LargeCard";

export default function LibraryView(props) {
  let { categories } = props;

  if (!categories) {
    return "Loading...";
  }

  return (
    <div className="library-view">
      <LargeCard />
    </div>
  );
}
