import React from "react"
import Track from "../components/Track"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Track",
  component: Track,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Track {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mode: "album",
  data: {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
        },
        href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
        id: "1qwdTaVUdjYJLLoxtFmsqr",
        name: "The Movement",
        type: "artist",
        uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
      },
    ],
    available_markets: [
      "US",
    ],
    disc_number: 1,
    duration_ms: 478866,
    explicit: false,
    external_urls: {
      spotify: "https://open.spotify.com/track/470WDg2zxRvJLGZbrHQ4s2",
    },
    href: "https://api.spotify.com/v1/tracks/470WDg2zxRvJLGZbrHQ4s2",
    id: "470WDg2zxRvJLGZbrHQ4s2",
    is_local: false,
    name: "U Don't Know Me",
    preview_url:
      "https://p.scdn.co/mp3-preview/e9376e2bc749e33cb296f873739dc700711237bc?cid=552224aa73d341988e49f4cdb6c6b45e",
    track_number: 15,
    type: "track",
    uri: "spotify:track:470WDg2zxRvJLGZbrHQ4s2",
  },
  album: "Always With Me",
  index: 16,
  date_added: "2022-07-29",
}
