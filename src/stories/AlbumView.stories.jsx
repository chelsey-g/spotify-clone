import React from "react"
import AlbumView from "../components/AlbumView"

export default {
  title: "Example/AlbumView",
  component: AlbumView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AlbumView {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  album: {
    album_type: "album",
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
    copyrights: [
      {
        text: "2022 The Movement",
        type: "C",
      },
      {
        text: "2022 R4RE RECORDS",
        type: "P",
      },
    ],
    external_ids: {
      upc: "195729765870",
    },
    external_urls: {
      spotify: "https://open.spotify.com/album/0DeaiadTeALAqCCUW4Lv5Y",
    },
    genres: [],
    href: "https://api.spotify.com/v1/albums/0DeaiadTeALAqCCUW4Lv5Y",
    id: "0DeaiadTeALAqCCUW4Lv5Y",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f2fd5aa3a8621d882b5eab7b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f2fd5aa3a8621d882b5eab7b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f2fd5aa3a8621d882b5eab7b",
        width: 64,
      },
    ],
    label: "Rootfire",
    name: "Always With Me",
    popularity: 44,
    release_date: "2022-07-29",
    release_date_precision: "day",
    total_tracks: 15,
    tracks: {
      href: "https://api.spotify.com/v1/albums/0DeaiadTeALAqCCUW4Lv5Y/tracks?offset=0&limit=50&locale=en-US,en;q=0.9",
      items: [
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
          ],
          disc_number: 1,
          duration_ms: 263986,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/2ToMES33dQe8kiTPSjTdZH",
          },
          href: "https://api.spotify.com/v1/tracks/2ToMES33dQe8kiTPSjTdZH",
          id: "2ToMES33dQe8kiTPSjTdZH",
          is_local: false,
          name: "Always With Me",
          preview_url:
            "https://p.scdn.co/mp3-preview/725bcdb3ab51a3b354fb8f7fe43e8045c58a7939?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2ToMES33dQe8kiTPSjTdZH",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
          ],
          disc_number: 1,
          duration_ms: 222880,
          explicit: true,
          external_urls: {
            spotify: "https://open.spotify.com/track/6chXLkDkOACjefYIqXJJzq",
          },
          href: "https://api.spotify.com/v1/tracks/6chXLkDkOACjefYIqXJJzq",
          id: "6chXLkDkOACjefYIqXJJzq",
          is_local: false,
          name: "Afraid",
          preview_url:
            "https://p.scdn.co/mp3-preview/186ff240dc78999cb023f54a2c4be48f6ba625eb?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 2,
          type: "track",
          uri: "spotify:track:6chXLkDkOACjefYIqXJJzq",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
          ],
          disc_number: 1,
          duration_ms: 243360,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/3V4eF729TjSBNcJ4DgEaWF",
          },
          href: "https://api.spotify.com/v1/tracks/3V4eF729TjSBNcJ4DgEaWF",
          id: "3V4eF729TjSBNcJ4DgEaWF",
          is_local: false,
          name: "Beg Borrow & Steal",
          preview_url:
            "https://p.scdn.co/mp3-preview/952f3d1da2fa043c1b5762b18a08ff1f9e55fa37?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 3,
          type: "track",
          uri: "spotify:track:3V4eF729TjSBNcJ4DgEaWF",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6MxlVTY6PmY8Nyn16fvxtb",
              },
              href: "https://api.spotify.com/v1/artists/6MxlVTY6PmY8Nyn16fvxtb",
              id: "6MxlVTY6PmY8Nyn16fvxtb",
              name: "Slightly Stoopid",
              type: "artist",
              uri: "spotify:artist:6MxlVTY6PmY8Nyn16fvxtb",
            },
          ],
          disc_number: 1,
          duration_ms: 221626,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/2B1UZhUKvBrRMZ4Er4OMXm",
          },
          href: "https://api.spotify.com/v1/tracks/2B1UZhUKvBrRMZ4Er4OMXm",
          id: "2B1UZhUKvBrRMZ4Er4OMXm",
          is_local: false,
          name: "Sounds Of Summer (with Slightly Stoopid)",
          preview_url:
            "https://p.scdn.co/mp3-preview/e89e5e35b884b92fe57b05dd26e9026c8990651d?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 4,
          type: "track",
          uri: "spotify:track:2B1UZhUKvBrRMZ4Er4OMXm",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
          ],
          disc_number: 1,
          duration_ms: 249426,
          explicit: true,
          external_urls: {
            spotify: "https://open.spotify.com/track/0USVMrItpVHQs4hqrF8piO",
          },
          href: "https://api.spotify.com/v1/tracks/0USVMrItpVHQs4hqrF8piO",
          id: "0USVMrItpVHQs4hqrF8piO",
          is_local: false,
          name: "Elephant",
          preview_url:
            "https://p.scdn.co/mp3-preview/9b9b94fa62474dc42bedb4cfb48b301d84bcca28?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 5,
          type: "track",
          uri: "spotify:track:0USVMrItpVHQs4hqrF8piO",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
          ],
          disc_number: 1,
          duration_ms: 255146,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/6hJRuCv5heZIq0JcdbpjaP",
          },
          href: "https://api.spotify.com/v1/tracks/6hJRuCv5heZIq0JcdbpjaP",
          id: "6hJRuCv5heZIq0JcdbpjaP",
          is_local: false,
          name: "No Worry",
          preview_url:
            "https://p.scdn.co/mp3-preview/4820ef47687888c792baa0ef69e133e210b7a5f0?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 6,
          type: "track",
          uri: "spotify:track:6hJRuCv5heZIq0JcdbpjaP",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
          ],
          disc_number: 1,
          duration_ms: 239720,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/0A9zBs6ldbhHTVuFcaGxET",
          },
          href: "https://api.spotify.com/v1/tracks/0A9zBs6ldbhHTVuFcaGxET",
          id: "0A9zBs6ldbhHTVuFcaGxET",
          is_local: false,
          name: "Worth Fighting For",
          preview_url:
            "https://p.scdn.co/mp3-preview/68ba65eae7658ebe928de8db2016c08ae968453a?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 7,
          type: "track",
          uri: "spotify:track:0A9zBs6ldbhHTVuFcaGxET",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
          ],
          disc_number: 1,
          duration_ms: 190906,
          explicit: true,
          external_urls: {
            spotify: "https://open.spotify.com/track/1s0raq2yinGc5Yy0OHs0U9",
          },
          href: "https://api.spotify.com/v1/tracks/1s0raq2yinGc5Yy0OHs0U9",
          id: "1s0raq2yinGc5Yy0OHs0U9",
          is_local: false,
          name: "Chainz",
          preview_url:
            "https://p.scdn.co/mp3-preview/acf90fbdf64c6a9b5a1ffbd0a03c8bebb9992874?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 8,
          type: "track",
          uri: "spotify:track:1s0raq2yinGc5Yy0OHs0U9",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
          ],
          disc_number: 1,
          duration_ms: 237706,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/4KsDGS40IVvkIgrnibjQHt",
          },
          href: "https://api.spotify.com/v1/tracks/4KsDGS40IVvkIgrnibjQHt",
          id: "4KsDGS40IVvkIgrnibjQHt",
          is_local: false,
          name: "Jungle",
          preview_url:
            "https://p.scdn.co/mp3-preview/4c38f86706efc0ebfed6e15fc71d958d81d9f9a5?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 9,
          type: "track",
          uri: "spotify:track:4KsDGS40IVvkIgrnibjQHt",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2mSiPzmzBCGS7p6tEuRuTd",
              },
              href: "https://api.spotify.com/v1/artists/2mSiPzmzBCGS7p6tEuRuTd",
              id: "2mSiPzmzBCGS7p6tEuRuTd",
              name: "Clinton Fearon",
              type: "artist",
              uri: "spotify:artist:2mSiPzmzBCGS7p6tEuRuTd",
            },
          ],
          disc_number: 1,
          duration_ms: 316386,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/7sgOlNs2wqRwOa4ypgBIlC",
          },
          href: "https://api.spotify.com/v1/tracks/7sgOlNs2wqRwOa4ypgBIlC",
          id: "7sgOlNs2wqRwOa4ypgBIlC",
          is_local: false,
          name: "Mountain (with Clinton Fearon)",
          preview_url:
            "https://p.scdn.co/mp3-preview/930e224577e58b10887a7202cff0e5cf9a234871?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 10,
          type: "track",
          uri: "spotify:track:7sgOlNs2wqRwOa4ypgBIlC",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0HYbyzzhI44iTHvYnf1nOs",
              },
              href: "https://api.spotify.com/v1/artists/0HYbyzzhI44iTHvYnf1nOs",
              id: "0HYbyzzhI44iTHvYnf1nOs",
              name: "HIRIE",
              type: "artist",
              uri: "spotify:artist:0HYbyzzhI44iTHvYnf1nOs",
            },
          ],
          disc_number: 1,
          duration_ms: 197453,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/56mc3WaLWWoiByemadq2kn",
          },
          href: "https://api.spotify.com/v1/tracks/56mc3WaLWWoiByemadq2kn",
          id: "56mc3WaLWWoiByemadq2kn",
          is_local: false,
          name: "Actor (with HIRIE)",
          preview_url:
            "https://p.scdn.co/mp3-preview/034168be5f23a6520465c759b2382eecf93570bf?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 11,
          type: "track",
          uri: "spotify:track:56mc3WaLWWoiByemadq2kn",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
          ],
          disc_number: 1,
          duration_ms: 263640,
          explicit: true,
          external_urls: {
            spotify: "https://open.spotify.com/track/0hDZEJVs0HGchci6jKOteU",
          },
          href: "https://api.spotify.com/v1/tracks/0hDZEJVs0HGchci6jKOteU",
          id: "0hDZEJVs0HGchci6jKOteU",
          is_local: false,
          name: "High Roller",
          preview_url:
            "https://p.scdn.co/mp3-preview/6e197e75e8dc38789705f772df5509b70fbbbe30?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 12,
          type: "track",
          uri: "spotify:track:0hDZEJVs0HGchci6jKOteU",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0q9lPhJHW5R9J7RXIJRbTk",
              },
              href: "https://api.spotify.com/v1/artists/0q9lPhJHW5R9J7RXIJRbTk",
              id: "0q9lPhJHW5R9J7RXIJRbTk",
              name: "Iration",
              type: "artist",
              uri: "spotify:artist:0q9lPhJHW5R9J7RXIJRbTk",
            },
          ],
          disc_number: 1,
          duration_ms: 255853,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/3aNt4TPx9XDcQWwlIFeN5T",
          },
          href: "https://api.spotify.com/v1/tracks/3aNt4TPx9XDcQWwlIFeN5T",
          id: "3aNt4TPx9XDcQWwlIFeN5T",
          is_local: false,
          name: "On & On (with Iration)",
          preview_url:
            "https://p.scdn.co/mp3-preview/9bd111fb0721ae60215d6b12c6b448acb1f2618f?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 13,
          type: "track",
          uri: "spotify:track:3aNt4TPx9XDcQWwlIFeN5T",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0Rb6PZXrcxvzixAwZwFmMu",
              },
              href: "https://api.spotify.com/v1/artists/0Rb6PZXrcxvzixAwZwFmMu",
              id: "0Rb6PZXrcxvzixAwZwFmMu",
              name: "Soom T",
              type: "artist",
              uri: "spotify:artist:0Rb6PZXrcxvzixAwZwFmMu",
            },
          ],
          disc_number: 1,
          duration_ms: 226653,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/3LaZ2i671XN5c5AIx38vL7",
          },
          href: "https://api.spotify.com/v1/tracks/3LaZ2i671XN5c5AIx38vL7",
          id: "3LaZ2i671XN5c5AIx38vL7",
          is_local: false,
          name: "Love To Burn (with Soom T)",
          preview_url:
            "https://p.scdn.co/mp3-preview/ebd01ca2019b50192760dc738ed2804eda151617?cid=552224aa73d341988e49f4cdb6c6b45e",
          track_number: 14,
          type: "track",
          uri: "spotify:track:3LaZ2i671XN5c5AIx38vL7",
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1qwdTaVUdjYJLLoxtFmsqr",
              },
              href: "https://api.spotify.com/v1/artists/1qwdTaVUdjYJLLoxtFmsqr",
              id: "1qwdTaVUdjYJLLoxtFmsqr",
              name: "The Movement",
              type: "artist",
              uri: "spotify:artist:1qwdTaVUdjYJLLoxtFmsqr",
            },
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
      ],
      limit: 50,
      next: null,
      offset: 0,
      previous: null,
      total: 15,
    },
    type: "album",
    uri: "spotify:album:0DeaiadTeALAqCCUW4Lv5Y",
  },
  tracks: [
    {
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
      disc_number: 1,
      duration_ms: 263986,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/2ToMES33dQe8kiTPSjTdZH",
      },
      href: "https://api.spotify.com/v1/tracks/2ToMES33dQe8kiTPSjTdZH",
      id: "2ToMES33dQe8kiTPSjTdZH",
      is_local: false,
      name: "Always With Me",
      preview_url:
        "https://p.scdn.co/mp3-preview/725bcdb3ab51a3b354fb8f7fe43e8045c58a7939?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 1,
      type: "track",
      uri: "spotify:track:2ToMES33dQe8kiTPSjTdZH",
    },
    {
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
      disc_number: 1,
      duration_ms: 222880,
      explicit: true,
      external_urls: {
        spotify: "https://open.spotify.com/track/6chXLkDkOACjefYIqXJJzq",
      },
      href: "https://api.spotify.com/v1/tracks/6chXLkDkOACjefYIqXJJzq",
      id: "6chXLkDkOACjefYIqXJJzq",
      is_local: false,
      name: "Afraid",
      preview_url:
        "https://p.scdn.co/mp3-preview/186ff240dc78999cb023f54a2c4be48f6ba625eb?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 2,
      type: "track",
      uri: "spotify:track:6chXLkDkOACjefYIqXJJzq",
    },
    {
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
      disc_number: 1,
      duration_ms: 243360,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/3V4eF729TjSBNcJ4DgEaWF",
      },
      href: "https://api.spotify.com/v1/tracks/3V4eF729TjSBNcJ4DgEaWF",
      id: "3V4eF729TjSBNcJ4DgEaWF",
      is_local: false,
      name: "Beg Borrow & Steal",
      preview_url:
        "https://p.scdn.co/mp3-preview/952f3d1da2fa043c1b5762b18a08ff1f9e55fa37?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 3,
      type: "track",
      uri: "spotify:track:3V4eF729TjSBNcJ4DgEaWF",
    },
    {
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
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6MxlVTY6PmY8Nyn16fvxtb",
          },
          href: "https://api.spotify.com/v1/artists/6MxlVTY6PmY8Nyn16fvxtb",
          id: "6MxlVTY6PmY8Nyn16fvxtb",
          name: "Slightly Stoopid",
          type: "artist",
          uri: "spotify:artist:6MxlVTY6PmY8Nyn16fvxtb",
        },
      ],
      disc_number: 1,
      duration_ms: 221626,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/2B1UZhUKvBrRMZ4Er4OMXm",
      },
      href: "https://api.spotify.com/v1/tracks/2B1UZhUKvBrRMZ4Er4OMXm",
      id: "2B1UZhUKvBrRMZ4Er4OMXm",
      is_local: false,
      name: "Sounds Of Summer (with Slightly Stoopid)",
      preview_url:
        "https://p.scdn.co/mp3-preview/e89e5e35b884b92fe57b05dd26e9026c8990651d?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 4,
      type: "track",
      uri: "spotify:track:2B1UZhUKvBrRMZ4Er4OMXm",
    },
    {
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
      disc_number: 1,
      duration_ms: 249426,
      explicit: true,
      external_urls: {
        spotify: "https://open.spotify.com/track/0USVMrItpVHQs4hqrF8piO",
      },
      href: "https://api.spotify.com/v1/tracks/0USVMrItpVHQs4hqrF8piO",
      id: "0USVMrItpVHQs4hqrF8piO",
      is_local: false,
      name: "Elephant",
      preview_url:
        "https://p.scdn.co/mp3-preview/9b9b94fa62474dc42bedb4cfb48b301d84bcca28?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 5,
      type: "track",
      uri: "spotify:track:0USVMrItpVHQs4hqrF8piO",
    },
    {
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
      disc_number: 1,
      duration_ms: 255146,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/6hJRuCv5heZIq0JcdbpjaP",
      },
      href: "https://api.spotify.com/v1/tracks/6hJRuCv5heZIq0JcdbpjaP",
      id: "6hJRuCv5heZIq0JcdbpjaP",
      is_local: false,
      name: "No Worry",
      preview_url:
        "https://p.scdn.co/mp3-preview/4820ef47687888c792baa0ef69e133e210b7a5f0?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 6,
      type: "track",
      uri: "spotify:track:6hJRuCv5heZIq0JcdbpjaP",
    },
    {
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
      disc_number: 1,
      duration_ms: 239720,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/0A9zBs6ldbhHTVuFcaGxET",
      },
      href: "https://api.spotify.com/v1/tracks/0A9zBs6ldbhHTVuFcaGxET",
      id: "0A9zBs6ldbhHTVuFcaGxET",
      is_local: false,
      name: "Worth Fighting For",
      preview_url:
        "https://p.scdn.co/mp3-preview/68ba65eae7658ebe928de8db2016c08ae968453a?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 7,
      type: "track",
      uri: "spotify:track:0A9zBs6ldbhHTVuFcaGxET",
    },
    {
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
      disc_number: 1,
      duration_ms: 190906,
      explicit: true,
      external_urls: {
        spotify: "https://open.spotify.com/track/1s0raq2yinGc5Yy0OHs0U9",
      },
      href: "https://api.spotify.com/v1/tracks/1s0raq2yinGc5Yy0OHs0U9",
      id: "1s0raq2yinGc5Yy0OHs0U9",
      is_local: false,
      name: "Chainz",
      preview_url:
        "https://p.scdn.co/mp3-preview/acf90fbdf64c6a9b5a1ffbd0a03c8bebb9992874?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 8,
      type: "track",
      uri: "spotify:track:1s0raq2yinGc5Yy0OHs0U9",
    },
    {
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
      disc_number: 1,
      duration_ms: 237706,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/4KsDGS40IVvkIgrnibjQHt",
      },
      href: "https://api.spotify.com/v1/tracks/4KsDGS40IVvkIgrnibjQHt",
      id: "4KsDGS40IVvkIgrnibjQHt",
      is_local: false,
      name: "Jungle",
      preview_url:
        "https://p.scdn.co/mp3-preview/4c38f86706efc0ebfed6e15fc71d958d81d9f9a5?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 9,
      type: "track",
      uri: "spotify:track:4KsDGS40IVvkIgrnibjQHt",
    },
    {
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
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2mSiPzmzBCGS7p6tEuRuTd",
          },
          href: "https://api.spotify.com/v1/artists/2mSiPzmzBCGS7p6tEuRuTd",
          id: "2mSiPzmzBCGS7p6tEuRuTd",
          name: "Clinton Fearon",
          type: "artist",
          uri: "spotify:artist:2mSiPzmzBCGS7p6tEuRuTd",
        },
      ],
      disc_number: 1,
      duration_ms: 316386,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/7sgOlNs2wqRwOa4ypgBIlC",
      },
      href: "https://api.spotify.com/v1/tracks/7sgOlNs2wqRwOa4ypgBIlC",
      id: "7sgOlNs2wqRwOa4ypgBIlC",
      is_local: false,
      name: "Mountain (with Clinton Fearon)",
      preview_url:
        "https://p.scdn.co/mp3-preview/930e224577e58b10887a7202cff0e5cf9a234871?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 10,
      type: "track",
      uri: "spotify:track:7sgOlNs2wqRwOa4ypgBIlC",
    },
    {
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
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/0HYbyzzhI44iTHvYnf1nOs",
          },
          href: "https://api.spotify.com/v1/artists/0HYbyzzhI44iTHvYnf1nOs",
          id: "0HYbyzzhI44iTHvYnf1nOs",
          name: "HIRIE",
          type: "artist",
          uri: "spotify:artist:0HYbyzzhI44iTHvYnf1nOs",
        },
      ],
      disc_number: 1,
      duration_ms: 197453,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/56mc3WaLWWoiByemadq2kn",
      },
      href: "https://api.spotify.com/v1/tracks/56mc3WaLWWoiByemadq2kn",
      id: "56mc3WaLWWoiByemadq2kn",
      is_local: false,
      name: "Actor (with HIRIE)",
      preview_url:
        "https://p.scdn.co/mp3-preview/034168be5f23a6520465c759b2382eecf93570bf?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 11,
      type: "track",
      uri: "spotify:track:56mc3WaLWWoiByemadq2kn",
    },
    {
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
      disc_number: 1,
      duration_ms: 263640,
      explicit: true,
      external_urls: {
        spotify: "https://open.spotify.com/track/0hDZEJVs0HGchci6jKOteU",
      },
      href: "https://api.spotify.com/v1/tracks/0hDZEJVs0HGchci6jKOteU",
      id: "0hDZEJVs0HGchci6jKOteU",
      is_local: false,
      name: "High Roller",
      preview_url:
        "https://p.scdn.co/mp3-preview/6e197e75e8dc38789705f772df5509b70fbbbe30?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 12,
      type: "track",
      uri: "spotify:track:0hDZEJVs0HGchci6jKOteU",
    },
    {
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
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/0q9lPhJHW5R9J7RXIJRbTk",
          },
          href: "https://api.spotify.com/v1/artists/0q9lPhJHW5R9J7RXIJRbTk",
          id: "0q9lPhJHW5R9J7RXIJRbTk",
          name: "Iration",
          type: "artist",
          uri: "spotify:artist:0q9lPhJHW5R9J7RXIJRbTk",
        },
      ],
      disc_number: 1,
      duration_ms: 255853,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/3aNt4TPx9XDcQWwlIFeN5T",
      },
      href: "https://api.spotify.com/v1/tracks/3aNt4TPx9XDcQWwlIFeN5T",
      id: "3aNt4TPx9XDcQWwlIFeN5T",
      is_local: false,
      name: "On & On (with Iration)",
      preview_url:
        "https://p.scdn.co/mp3-preview/9bd111fb0721ae60215d6b12c6b448acb1f2618f?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 13,
      type: "track",
      uri: "spotify:track:3aNt4TPx9XDcQWwlIFeN5T",
    },
    {
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
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/0Rb6PZXrcxvzixAwZwFmMu",
          },
          href: "https://api.spotify.com/v1/artists/0Rb6PZXrcxvzixAwZwFmMu",
          id: "0Rb6PZXrcxvzixAwZwFmMu",
          name: "Soom T",
          type: "artist",
          uri: "spotify:artist:0Rb6PZXrcxvzixAwZwFmMu",
        },
      ],
      disc_number: 1,
      duration_ms: 226653,
      explicit: false,
      external_urls: {
        spotify: "https://open.spotify.com/track/3LaZ2i671XN5c5AIx38vL7",
      },
      href: "https://api.spotify.com/v1/tracks/3LaZ2i671XN5c5AIx38vL7",
      id: "3LaZ2i671XN5c5AIx38vL7",
      is_local: false,
      name: "Love To Burn (with Soom T)",
      preview_url:
        "https://p.scdn.co/mp3-preview/ebd01ca2019b50192760dc738ed2804eda151617?cid=552224aa73d341988e49f4cdb6c6b45e",
      track_number: 14,
      type: "track",
      uri: "spotify:track:3LaZ2i671XN5c5AIx38vL7",
    },
    {
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
  ],
}
