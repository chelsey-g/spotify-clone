import React from "react";
import MediumCard from "../components/MediumCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MediumCard",
  component: MediumCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MediumCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: "Drive Playlist",
  coverUrl: "https://i.scdn.co/image/ab6761610000e5eb4d709a7f0c971c81aeeb6e75",
  artists: ["Goose", "Bruce Springsteen", "Billy Joel", "and..."],
};
