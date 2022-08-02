import React from "react";
import CreatePlaylist from "../components/CreatePlaylist";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/CreatePlaylist",
  component: CreatePlaylist,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CreatePlaylist {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  //     fetch("https://api.spotify.com/v1/users//playlists", {
  //   "method": "POST",
  //   "headers": {
  //     "Accept": "application/json",
  //     "Content-Type": "application/json",
  //     "Authorization": "Bearer BQDW-jbk1LVmv9xGKjWhzJOaj5bK3iR9RqOcZZX7q3-Q3EsPLd866WlFA1QAXCpY0UjJUnw79f2DObAtZmXFeSVgRlqOZqI3IwtINb8XrC7nUhd8XVAqVru7HPViy4pTkAn_2X4cXm7bpjlnqCC54GZLGl-mKAg-xkobfWo0a-YB2PUGKqa4nK7eEgng9-WmPBNtMd0YMDE2HMvislEMY3HqaRNC0k6cNCp4HOr1LJpvmg"
  //   },
  //   "body": "{\"name\":\"New Playlist\",\"description\":\"New playlist description\",\"public\":false}"
  // })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.error(err);
  // });
};
