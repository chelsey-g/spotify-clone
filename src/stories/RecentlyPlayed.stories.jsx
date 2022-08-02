import React from "react";
import RecentlyPlayed from "../components/RecentlyPlayed";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/RecentlyPlayed",
  component: RecentlyPlayed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RecentlyPlayed {...args} />;

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
};
