import React from "react";
import SmallCard from "../components/SmallCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SmallCard",
  component: SmallCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SmallCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  coverUrl:
    "https://seed-mix-image.spotifycdn.com/v6/img/artist/0EdvGhlC1FkGItLOWQzG4J/en/default",
  name: "Sublime Mix",
};
