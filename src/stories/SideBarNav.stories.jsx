import React from "react"
import SideBarNav from "../components/SideBarNav"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SideBarNav",
  component: SideBarNav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SideBarNav {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  playlists: [
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/0bO2T6sfVTAO74Kl7jj4Ww",
      },
      href: "https://api.spotify.com/v1/playlists/0bO2T6sfVTAO74Kl7jj4Ww",
      id: "0bO2T6sfVTAO74Kl7jj4Ww",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b2733036b195cb7ab251c0caf928ab67616d0000b2737367ff0aaaed79bcc3a9fbb8ab67616d0000b273b3fb6987b57fd246a21b4ab8ab67616d0000b273cf67cc9ab0ec317f187642ff",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b2733036b195cb7ab251c0caf928ab67616d0000b2737367ff0aaaed79bcc3a9fbb8ab67616d0000b273b3fb6987b57fd246a21b4ab8ab67616d0000b273cf67cc9ab0ec317f187642ff",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b2733036b195cb7ab251c0caf928ab67616d0000b2737367ff0aaaed79bcc3a9fbb8ab67616d0000b273b3fb6987b57fd246a21b4ab8ab67616d0000b273cf67cc9ab0ec317f187642ff",
          width: 60,
        },
      ],
      name: "Mexican Reggae",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MTAsNjNiNzcwNjEyMzVlODEyMTAwMTNiOGNhNzA2NThmMTA5ZDMzODJjOA==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/0bO2T6sfVTAO74Kl7jj4Ww/tracks",
        total: 8,
      },
      type: "playlist",
      uri: "spotify:playlist:0bO2T6sfVTAO74Kl7jj4Ww",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/0AGSpvnUiALo2oVMjjTtsA",
      },
      href: "https://api.spotify.com/v1/playlists/0AGSpvnUiALo2oVMjjTtsA",
      id: "0AGSpvnUiALo2oVMjjTtsA",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e2046b3ad928a66a37895d37",
          width: 640,
        },
      ],
      name: "Check it out",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "MixhYjIxNzYwODBlMzQwZTRkYmU4ZmQ2ODhjYWZiZTU4NWRiYzdjZWQz",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/0AGSpvnUiALo2oVMjjTtsA/tracks",
        total: 1,
      },
      type: "playlist",
      uri: "spotify:playlist:0AGSpvnUiALo2oVMjjTtsA",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/1QCencQBcsSuIovtqEM51G",
      },
      href: "https://api.spotify.com/v1/playlists/1QCencQBcsSuIovtqEM51G",
      id: "1QCencQBcsSuIovtqEM51G",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b273390ecf99ae3cab55b1872582ab67616d0000b2736d07ac77f37c4e83f2d19972ab67616d0000b2737c6b0dce30195549d4b55130ab67616d0000b273bbd081a355b3acd631d226d4",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b273390ecf99ae3cab55b1872582ab67616d0000b2736d07ac77f37c4e83f2d19972ab67616d0000b2737c6b0dce30195549d4b55130ab67616d0000b273bbd081a355b3acd631d226d4",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b273390ecf99ae3cab55b1872582ab67616d0000b2736d07ac77f37c4e83f2d19972ab67616d0000b2737c6b0dce30195549d4b55130ab67616d0000b273bbd081a355b3acd631d226d4",
          width: 60,
        },
      ],
      name: "Slightly Stoopid",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MTYsNTk1YjkyNGU5M2Y0MGFjYmI1ZWYyYWViODBkMmI3NDhjNzgzMDlkOA==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/1QCencQBcsSuIovtqEM51G/tracks",
        total: 14,
      },
      type: "playlist",
      uri: "spotify:playlist:1QCencQBcsSuIovtqEM51G",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/17tG95z9n2f7fvzizp53iS",
      },
      href: "https://api.spotify.com/v1/playlists/17tG95z9n2f7fvzizp53iS",
      id: "17tG95z9n2f7fvzizp53iS",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b27315b3727c6abdcfe4826f91ffab67616d0000b273208f1bd1f840579dd1d3e451ab67616d0000b2732db86cc8632c1f3de087bc00ab67616d0000b2733c5ad7f1e50e6bb5a08bb74b",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b27315b3727c6abdcfe4826f91ffab67616d0000b273208f1bd1f840579dd1d3e451ab67616d0000b2732db86cc8632c1f3de087bc00ab67616d0000b2733c5ad7f1e50e6bb5a08bb74b",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b27315b3727c6abdcfe4826f91ffab67616d0000b273208f1bd1f840579dd1d3e451ab67616d0000b2732db86cc8632c1f3de087bc00ab67616d0000b2733c5ad7f1e50e6bb5a08bb74b",
          width: 60,
        },
      ],
      name: "Triphop",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MTUsZDQ0MzY3YWU0NGFjNjgzYTRkYWU3NmMxOTUxNWY5OGFlZjUyOWE3ZQ==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/17tG95z9n2f7fvzizp53iS/tracks",
        total: 14,
      },
      type: "playlist",
      uri: "spotify:playlist:17tG95z9n2f7fvzizp53iS",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6pA4L1bk7rB5V1ziptqWf9",
      },
      href: "https://api.spotify.com/v1/playlists/6pA4L1bk7rB5V1ziptqWf9",
      id: "6pA4L1bk7rB5V1ziptqWf9",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b02696d76dc81736e6b8513f",
          width: 640,
        },
      ],
      name: "African Funk",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "NSw3NjVhYzJkNGE2MmU2MGQ4MGZjNjg3Y2Q0MTJhYzA5OTQ0ZmE3Yjc2",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/6pA4L1bk7rB5V1ziptqWf9/tracks",
        total: 3,
      },
      type: "playlist",
      uri: "spotify:playlist:6pA4L1bk7rB5V1ziptqWf9",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/0pRiL6YteGFLtLArbbmmAS",
      },
      href: "https://api.spotify.com/v1/playlists/0pRiL6YteGFLtLArbbmmAS",
      id: "0pRiL6YteGFLtLArbbmmAS",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b273b2dbf8c8d755551463ddb74eab67616d0000b273b64ae1ada9f79c15ed0e4cb0ab67616d0000b273e3e5bc2aafdbb1415a7bdcd6ab67616d0000b273e4ea6aa53f35a36f7fe86e52",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b273b2dbf8c8d755551463ddb74eab67616d0000b273b64ae1ada9f79c15ed0e4cb0ab67616d0000b273e3e5bc2aafdbb1415a7bdcd6ab67616d0000b273e4ea6aa53f35a36f7fe86e52",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b273b2dbf8c8d755551463ddb74eab67616d0000b273b64ae1ada9f79c15ed0e4cb0ab67616d0000b273e3e5bc2aafdbb1415a7bdcd6ab67616d0000b273e4ea6aa53f35a36f7fe86e52",
          width: 60,
        },
      ],
      name: "Latin",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MTksM2I4NGY2NzU4ZDJmYTZiNzk2YTA3NmJjZWFiMDQyMjQ0ZmNlODgyNw==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/0pRiL6YteGFLtLArbbmmAS/tracks",
        total: 18,
      },
      type: "playlist",
      uri: "spotify:playlist:0pRiL6YteGFLtLArbbmmAS",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/7BrXjiwkqvogGhfrU1WGwI",
      },
      href: "https://api.spotify.com/v1/playlists/7BrXjiwkqvogGhfrU1WGwI",
      id: "7BrXjiwkqvogGhfrU1WGwI",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b70177f2e48ed0bcfdcb85e3",
          width: 640,
        },
      ],
      name: "Roots/Dub (Instrumentals)",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "NixlYjNhZjkwN2QxMDViYjg2NTg3NzJkZjgyMmNjNWNmZDRkOTdmMmU2",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/7BrXjiwkqvogGhfrU1WGwI/tracks",
        total: 4,
      },
      type: "playlist",
      uri: "spotify:playlist:7BrXjiwkqvogGhfrU1WGwI",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/7EORtLoBNvV4HKaiuCYPOq",
      },
      href: "https://api.spotify.com/v1/playlists/7EORtLoBNvV4HKaiuCYPOq",
      id: "7EORtLoBNvV4HKaiuCYPOq",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b2733c926922da12e776c5196392ab67616d0000b2734b5d1a23e32a9a3c6b7fb0caab67616d0000b2738aff719c168b08f591382135ab67616d0000b273fe83666ebd25002a62d64fd7",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b2733c926922da12e776c5196392ab67616d0000b2734b5d1a23e32a9a3c6b7fb0caab67616d0000b2738aff719c168b08f591382135ab67616d0000b273fe83666ebd25002a62d64fd7",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b2733c926922da12e776c5196392ab67616d0000b2734b5d1a23e32a9a3c6b7fb0caab67616d0000b2738aff719c168b08f591382135ab67616d0000b273fe83666ebd25002a62d64fd7",
          width: 60,
        },
      ],
      name: "Chillhop",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MzUsNTcyMmE1ZDhmN2NjY2I1NTJhZjMyMmQxYTQxYWMzNWFiMjRhOWQ3YQ==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/7EORtLoBNvV4HKaiuCYPOq/tracks",
        total: 31,
      },
      type: "playlist",
      uri: "spotify:playlist:7EORtLoBNvV4HKaiuCYPOq",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/2C9SBm8De7UHpOQ7bwex1q",
      },
      href: "https://api.spotify.com/v1/playlists/2C9SBm8De7UHpOQ7bwex1q",
      id: "2C9SBm8De7UHpOQ7bwex1q",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b273030013249738d422e3865d19ab67616d0000b27339dcd686eba5179dd5a9f506ab67616d0000b273ac9ad1f379218d9c5ecc36d6ab67616d0000b273b1ce8c01727b0aecc31d7b57",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b273030013249738d422e3865d19ab67616d0000b27339dcd686eba5179dd5a9f506ab67616d0000b273ac9ad1f379218d9c5ecc36d6ab67616d0000b273b1ce8c01727b0aecc31d7b57",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b273030013249738d422e3865d19ab67616d0000b27339dcd686eba5179dd5a9f506ab67616d0000b273ac9ad1f379218d9c5ecc36d6ab67616d0000b273b1ce8c01727b0aecc31d7b57",
          width: 60,
        },
      ],
      name: "FutureBeats - Wednesday, Dec 15, 2020",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MTMsMjJkOTUzN2VkYjA3NDY1NDllOTRiZTU0NDZlMzkzODA2ZDE1N2Q0MQ==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/2C9SBm8De7UHpOQ7bwex1q/tracks",
        total: 11,
      },
      type: "playlist",
      uri: "spotify:playlist:2C9SBm8De7UHpOQ7bwex1q",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/2wZXnLU9Bfy5vDyuvQskIL",
      },
      href: "https://api.spotify.com/v1/playlists/2wZXnLU9Bfy5vDyuvQskIL",
      id: "2wZXnLU9Bfy5vDyuvQskIL",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730968433789c769a974db4df0",
          width: 640,
        },
      ],
      name: "CHILL",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "NSw2YTYzN2U1YjQ3MGFjYTk2N2M0NDhiZmVjYzAyOGUyMzVmNWM3NWYy",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/2wZXnLU9Bfy5vDyuvQskIL/tracks",
        total: 3,
      },
      type: "playlist",
      uri: "spotify:playlist:2wZXnLU9Bfy5vDyuvQskIL",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/1DQlLS5ZzwTUKABeIqM5Go",
      },
      href: "https://api.spotify.com/v1/playlists/1DQlLS5ZzwTUKABeIqM5Go",
      id: "1DQlLS5ZzwTUKABeIqM5Go",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d211e94f717f91d2c1f58093",
          width: 640,
        },
      ],
      name: "Moring Music",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "MyxjYjZjYTY1NTBkMThjNDIyODY1ZTViMWYwMDI4MjkwMGYzYTUxYjE4",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/1DQlLS5ZzwTUKABeIqM5Go/tracks",
        total: 1,
      },
      type: "playlist",
      uri: "spotify:playlist:1DQlLS5ZzwTUKABeIqM5Go",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/4S6gblnE9FqCE9m7NzgKRv",
      },
      href: "https://api.spotify.com/v1/playlists/4S6gblnE9FqCE9m7NzgKRv",
      id: "4S6gblnE9FqCE9m7NzgKRv",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b27340d3b5cb260b1e7321c58b6dab67616d0000b2737c6b0dce30195549d4b55130ab67616d0000b2739cfa9a22fafff224802054acab67616d0000b273dc1886ac54cb45a8843404d7",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b27340d3b5cb260b1e7321c58b6dab67616d0000b2737c6b0dce30195549d4b55130ab67616d0000b2739cfa9a22fafff224802054acab67616d0000b273dc1886ac54cb45a8843404d7",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b27340d3b5cb260b1e7321c58b6dab67616d0000b2737c6b0dce30195549d4b55130ab67616d0000b2739cfa9a22fafff224802054acab67616d0000b273dc1886ac54cb45a8843404d7",
          width: 60,
        },
      ],
      name: "Modern Reggae",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MjIsNjI2YjA2MjdmNjBjOTRjZTg3MWQyNWUzOWI1YTM3MzdjNTVhOGQ2MA==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/4S6gblnE9FqCE9m7NzgKRv/tracks",
        total: 21,
      },
      type: "playlist",
      uri: "spotify:playlist:4S6gblnE9FqCE9m7NzgKRv",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/2NGLtb4oPaiOmnD7yJ7SFH",
      },
      href: "https://api.spotify.com/v1/playlists/2NGLtb4oPaiOmnD7yJ7SFH",
      id: "2NGLtb4oPaiOmnD7yJ7SFH",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f840cd2362e9da258bc2099c",
          width: 640,
        },
      ],
      name: "The Movement – Side By Side",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "MiwwNjliZjQ4NjdiMTA5ODQ3NzA2NDhlMjlmZjQ4MzlhNjY3M2Y0Nzg3",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/2NGLtb4oPaiOmnD7yJ7SFH/tracks",
        total: 12,
      },
      type: "playlist",
      uri: "spotify:playlist:2NGLtb4oPaiOmnD7yJ7SFH",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/2GrVr5UcExAXPWo25EJE4b",
      },
      href: "https://api.spotify.com/v1/playlists/2GrVr5UcExAXPWo25EJE4b",
      id: "2GrVr5UcExAXPWo25EJE4b",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2733e9290c42234051f8a39cc9c",
          width: 640,
        },
      ],
      name: "The Movement – Set Sail",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "MixkYmMyOTc1MmVlNDkyNzM4ZDZiNmU2ODQ5MmE3MzY0MTU4ZmU1MTFk",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/2GrVr5UcExAXPWo25EJE4b/tracks",
        total: 14,
      },
      type: "playlist",
      uri: "spotify:playlist:2GrVr5UcExAXPWo25EJE4b",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/192sV0mHBxzfFcoRwLKoJX",
      },
      href: "https://api.spotify.com/v1/playlists/192sV0mHBxzfFcoRwLKoJX",
      id: "192sV0mHBxzfFcoRwLKoJX",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273789448658df7c45928da7536",
          width: 640,
        },
      ],
      name: "The Movement – Ways Of The World",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "MiwwNzVmOTNlMTNjMTM1YmI2NDIyZDRkOGFmYjhiNzg5YTE4NjM2MjIw",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/192sV0mHBxzfFcoRwLKoJX/tracks",
        total: 13,
      },
      type: "playlist",
      uri: "spotify:playlist:192sV0mHBxzfFcoRwLKoJX",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/0ZQl2RtI4f3V6qzPOC4YLx",
      },
      href: "https://api.spotify.com/v1/playlists/0ZQl2RtI4f3V6qzPOC4YLx",
      id: "0ZQl2RtI4f3V6qzPOC4YLx",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f741d56026dc4ad63f0cda3b",
          width: 640,
        },
      ],
      name: "Fight the Feeling – Stick Figure 2",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "MiwyNTVkZGRmZDFlMmE4ZjcyYWU0NDZiZmRhODU4YzVjMzQyMzE0NGFi",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/0ZQl2RtI4f3V6qzPOC4YLx/tracks",
        total: 1,
      },
      type: "playlist",
      uri: "spotify:playlist:0ZQl2RtI4f3V6qzPOC4YLx",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/1BrA0j1rMpClGqMNCADkYP",
      },
      href: "https://api.spotify.com/v1/playlists/1BrA0j1rMpClGqMNCADkYP",
      id: "1BrA0j1rMpClGqMNCADkYP",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f741d56026dc4ad63f0cda3b",
          width: 640,
        },
      ],
      name: "Chill Reggae",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "NSwwMTQ1NWJiNjdhODJmMDJjNTdhNmI0YWRiN2RkN2MwYTAyOWE3NmJk",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/1BrA0j1rMpClGqMNCADkYP/tracks",
        total: 3,
      },
      type: "playlist",
      uri: "spotify:playlist:1BrA0j1rMpClGqMNCADkYP",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/1ekILxeUmX9skYOQOLckL5",
      },
      href: "https://api.spotify.com/v1/playlists/1ekILxeUmX9skYOQOLckL5",
      id: "1ekILxeUmX9skYOQOLckL5",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b2735a9b9e265814a9c9636a71a4ab67616d0000b2738ae223aff822ae06e8345f96ab67616d0000b273a32339b8818323380682a889ab67616d0000b273c13acd642ba9f6f5f127aa1b",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b2735a9b9e265814a9c9636a71a4ab67616d0000b2738ae223aff822ae06e8345f96ab67616d0000b273a32339b8818323380682a889ab67616d0000b273c13acd642ba9f6f5f127aa1b",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b2735a9b9e265814a9c9636a71a4ab67616d0000b2738ae223aff822ae06e8345f96ab67616d0000b273a32339b8818323380682a889ab67616d0000b273c13acd642ba9f6f5f127aa1b",
          width: 60,
        },
      ],
      name: "70s Chill",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "NSxjYjI4OGY3MjI0NTU0YTk5OTdhOTI3ODhmNGYwODhhYzJiNGQyMmRk",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/1ekILxeUmX9skYOQOLckL5/tracks",
        total: 4,
      },
      type: "playlist",
      uri: "spotify:playlist:1ekILxeUmX9skYOQOLckL5",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6Ha1P322p5gJu22f2fQYz2",
      },
      href: "https://api.spotify.com/v1/playlists/6Ha1P322p5gJu22f2fQYz2",
      id: "6Ha1P322p5gJu22f2fQYz2",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a32339b8818323380682a889",
          width: 640,
        },
      ],
      name: "Suite: Judy Blue Eyes - Remastered – Crosby, Stills & Nash 3",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "Miw3ZTM2M2VjNTE4ZjQyZGEyNTM3YjY4N2MwOGRmYzRkMmExNjFjMTZh",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/6Ha1P322p5gJu22f2fQYz2/tracks",
        total: 1,
      },
      type: "playlist",
      uri: "spotify:playlist:6Ha1P322p5gJu22f2fQYz2",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6TBauMiSxKGuMsrzdtKfZC",
      },
      href: "https://api.spotify.com/v1/playlists/6TBauMiSxKGuMsrzdtKfZC",
      id: "6TBauMiSxKGuMsrzdtKfZC",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a32339b8818323380682a889",
          width: 640,
        },
      ],
      name: "Suite: Judy Blue Eyes - Remastered – Crosby, Stills & Nash 2",
      owner: {
        display_name: "Jeff Loiselle",
        external_urls: {
          spotify: "https://open.spotify.com/user/jloiselle2",
        },
        href: "https://api.spotify.com/v1/users/jloiselle2",
        id: "jloiselle2",
        type: "user",
        uri: "spotify:user:jloiselle2",
      },
      primary_color: null,
      public: true,
      snapshot_id: "MixmZmU4ZjY4Mjg0OTNiMTk4NWM5Zjk0NTNlY2QwMWU0MDNiYjcxZjAw",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/6TBauMiSxKGuMsrzdtKfZC/tracks",
        total: 1,
      },
      type: "playlist",
      uri: "spotify:playlist:6TBauMiSxKGuMsrzdtKfZC",
    },
  ],
}
