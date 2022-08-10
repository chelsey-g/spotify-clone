import React from "react";
import SideBarNav from "../components/SideBarNav";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SideBarNav",
  component: SideBarNav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SideBarNav {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  playlists: [
    "Staind Radio",
    "I Love My '90's Hip-Hop",
    "Chill Mix",
    "Hanging Out & Relaxing",
    "Cranked Up",
    "Your Top Songs 2020",
    "The Wedding Singer Soundtrack",
    "Discover Weekly",
    "Liked from Radio",
  ],
};
