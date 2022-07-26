import React from "react";
import MainBody from "../components/MainBody";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MainBody",
  component: MainBody,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MainBody {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
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
