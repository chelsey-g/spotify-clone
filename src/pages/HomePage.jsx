import { getHomepageData } from "../util/data";

import MainBody from "../components/MainBody";

export default function HomePage(props) {
  let data = getHomepageData();
  return (
    <MainBody
      jumpBackInPlaylist={data.jumpBackInPlaylist}
      forYouPlaylist={data.forYouPlaylist}
    />
  );
}
