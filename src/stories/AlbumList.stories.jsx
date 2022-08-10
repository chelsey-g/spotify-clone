import React from "react";
import AlbumList from "../components/AlbumList";

export default {
  title: "Example/AlbumList",
  component: AlbumList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AlbumList {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  playlists: [
    {
      name: "Nirvana",
      coverUrl:
        "https://i.scdn.co/image/ab6761610000e5ebc63aded6f4bf4d06d1377106",
      artists: ["In Utero"],
    },
    {
      name: "Phish",
      coverUrl:
        "https://i.scdn.co/image/ab6761610000e5ebc12f77e7db22099b40c86f74",
      artists: ["Farmhouse"],
    },
    {
      name: "Drive Playlist",
      coverUrl:
        "https://i.scdn.co/image/ab6761610000e5ebf27acad0bc622073d9cab662",
      artists: ["Goose", "Bruce Springsteen", "Billy Joel", "and..."],
    },
  ],
  tracks: [
    {
      name: "Serve The Servants",
      artist: "Nirvana",
      number: "1",
      duration: "3:00",
    },
    {
      name: "Scentless Apprentice",
      artist: "Nirvana",
      number: "2",
      duration: "2:23",
    },
    {
      name: "Heart-shaped Box",
      artist: "Nirvana",
      number: "3",
      duration: "2:23",
    },
    {
      name: "Rape Me",
      artist: "Nirvana",
      number: "4",
      duration: "2:23",
    },
    {
      name: "Serve The Servants",
      artist: "Nirvana",
      number: "5",
      duration: "2:23",
    },
    {
      name: "Scentless Apprentice",
      artist: "Nirvana",
      number: "6",
      duration: "2:23",
    },
    {
      name: "Heart-shaped Box",
      artist: "Nirvana",
      number: "7",
      duration: "2:23",
    },
    {
      name: "Rape Me",
      artist: "Nirvana",
      number: "8",
      duration: "2:23",
    },
    {
      name: "Serve The Servants",
      artist: "Nirvana",
      number: "9",
      duration: "2:23",
    },
    {
      name: "Scentless Apprentice",
      artist: "Nirvana",
      number: "10",
      duration: "2:23",
    },
    {
      name: "Heart-shaped Box",
      artist: "Nirvana",
      number: "11",
      duration: "2:23",
    },
    {
      name: "Rape Me",
      artist: "Nirvana",
      number: "12",
      duration: "2:23",
    },
  ],
};
