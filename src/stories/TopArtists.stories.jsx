import React from "react";

import TopArtists from "../components/TopArtists";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/TopArtists",
  component: TopArtists,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TopArtists {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh",
      },
      followers: {
        href: null,
        total: 15777027,
      },
      genres: ["alternative rock", "grunge", "permanent wave", "rock"],
      href: "https://api.spotify.com/v1/artists/6olE6TJLqED3rqDCT0FyPh",
      id: "6olE6TJLqED3rqDCT0FyPh",
      images: [
        {
          height: 1057,
          url: "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b",
          width: 1000,
        },
        {
          height: 677,
          url: "https://i.scdn.co/image/a4e10b79a642e9891383448cbf37d7266a6883d6",
          width: 640,
        },
        {
          height: 211,
          url: "https://i.scdn.co/image/42ae0f180f16e2f21c1f2212717fc436f5b95451",
          width: 200,
        },
        {
          height: 68,
          url: "https://i.scdn.co/image/e797ad36d56c3fc8fa06c6fe91263a15bf8391b8",
          width: 64,
        },
      ],
      name: "Nirvana",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:6olE6TJLqED3rqDCT0FyPh",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5me0Irg2ANcsgc93uaYrpb",
      },
      followers: {
        href: null,
        total: 7857201,
      },
      genres: [
        "east coast hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "rap",
      ],
      href: "https://api.spotify.com/v1/artists/5me0Irg2ANcsgc93uaYrpb",
      id: "5me0Irg2ANcsgc93uaYrpb",
      images: [
        {
          height: 1250,
          url: "https://i.scdn.co/image/1b4858fbd24046a81cace5ee18d19c868262b91f",
          width: 1000,
        },
        {
          height: 800,
          url: "https://i.scdn.co/image/9bb42de208edcb69653a8e7951fa93b13f598cdd",
          width: 640,
        },
        {
          height: 250,
          url: "https://i.scdn.co/image/e56612ae56c9007e99ab36b83efd4faf6401260d",
          width: 200,
        },
        {
          height: 80,
          url: "https://i.scdn.co/image/fc074d287739cca12a89c76fd338ff7d4aa4acee",
          width: 64,
        },
      ],
      name: "The Notorious B.I.G.",
      popularity: 77,
      type: "artist",
      uri: "spotify:artist:5me0Irg2ANcsgc93uaYrpb",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0EdvGhlC1FkGItLOWQzG4J",
      },
      followers: {
        href: null,
        total: 2280965,
      },
      genres: ["reggae fusion", "ska mexicano", "ska punk"],
      href: "https://api.spotify.com/v1/artists/0EdvGhlC1FkGItLOWQzG4J",
      id: "0EdvGhlC1FkGItLOWQzG4J",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebe726280500259dbdb97a8be4",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174e726280500259dbdb97a8be4",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178e726280500259dbdb97a8be4",
          width: 160,
        },
      ],
      name: "Sublime",
      popularity: 70,
      type: "artist",
      uri: "spotify:artist:0EdvGhlC1FkGItLOWQzG4J",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg",
      },
      followers: {
        href: null,
        total: 21047223,
      },
      genres: ["conscious hip hop", "hip hop", "rap", "west coast rap"],
      href: "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      id: "2YZyLoL8N0Wb9xBt1NhZWg",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174437b9e2a82505b3d93ff1022",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178437b9e2a82505b3d93ff1022",
          width: 160,
        },
      ],
      name: "Kendrick Lamar",
      popularity: 88,
      type: "artist",
      uri: "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR",
      },
      followers: {
        href: null,
        total: 57663168,
      },
      genres: ["detroit hip hop", "hip hop", "rap"],
      href: "https://api.spotify.com/v1/artists/7dGJo4pcD2V6oG8kP0tJRR",
      id: "7dGJo4pcD2V6oG8kP0tJRR",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178a00b11c129b27a88fc72f36b",
          width: 160,
        },
      ],
      name: "Eminem",
      popularity: 89,
      type: "artist",
      uri: "spotify:artist:7dGJo4pcD2V6oG8kP0tJRR",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5ictveRyhWRs8Gt8Dvt1hS",
      },
      followers: {
        href: null,
        total: 561959,
      },
      genres: ["asbury park indie", "emo", "modern rock", "new jersey indie"],
      href: "https://api.spotify.com/v1/artists/5ictveRyhWRs8Gt8Dvt1hS",
      id: "5ictveRyhWRs8Gt8Dvt1hS",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebae4d5f165f8e5e4447060995",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174ae4d5f165f8e5e4447060995",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178ae4d5f165f8e5e4447060995",
          width: 160,
        },
      ],
      name: "The Front Bottoms",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:5ictveRyhWRs8Gt8Dvt1hS",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6MxlVTY6PmY8Nyn16fvxtb",
      },
      followers: {
        href: null,
        total: 625432,
      },
      genres: ["reggae fusion", "reggae rock"],
      href: "https://api.spotify.com/v1/artists/6MxlVTY6PmY8Nyn16fvxtb",
      id: "6MxlVTY6PmY8Nyn16fvxtb",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb6d9727b21899e63140d9aefa",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051746d9727b21899e63140d9aefa",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1786d9727b21899e63140d9aefa",
          width: 160,
        },
      ],
      name: "Slightly Stoopid",
      popularity: 63,
      type: "artist",
      uri: "spotify:artist:6MxlVTY6PmY8Nyn16fvxtb",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp",
      },
      followers: {
        href: null,
        total: 12411395,
      },
      genres: ["album rock", "classic rock", "hard rock", "rock"],
      href: "https://api.spotify.com/v1/artists/36QJpDe2go2KgaRleHCDTp",
      id: "36QJpDe2go2KgaRleHCDTp",
      images: [
        {
          height: 600,
          url: "https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e",
          width: 600,
        },
        {
          height: 200,
          url: "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8",
          width: 200,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/16eb3cdae0d824b520ac17710e943a99d3ef6602",
          width: 64,
        },
      ],
      name: "Led Zeppelin",
      popularity: 76,
      type: "artist",
      uri: "spotify:artist:36QJpDe2go2KgaRleHCDTp",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5wbIWUzTPuTxTyG6ouQKqz",
      },
      followers: {
        href: null,
        total: 447536,
      },
      genres: ["blues rock", "jam band"],
      href: "https://api.spotify.com/v1/artists/5wbIWUzTPuTxTyG6ouQKqz",
      id: "5wbIWUzTPuTxTyG6ouQKqz",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb449f0cb334164c2a11b231ec",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174449f0cb334164c2a11b231ec",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178449f0cb334164c2a11b231ec",
          width: 160,
        },
      ],
      name: "Phish",
      popularity: 55,
      type: "artist",
      uri: "spotify:artist:5wbIWUzTPuTxTyG6ouQKqz",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/168dgYui7ExaU612eooDF1",
      },
      followers: {
        href: null,
        total: 666536,
      },
      genres: ["emo", "indie rock", "pop punk", "screamo"],
      href: "https://api.spotify.com/v1/artists/168dgYui7ExaU612eooDF1",
      id: "168dgYui7ExaU612eooDF1",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb4d709a7f0c971c81aeeb6e75",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051744d709a7f0c971c81aeeb6e75",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1784d709a7f0c971c81aeeb6e75",
          width: 160,
        },
      ],
      name: "Brand New",
      popularity: 57,
      type: "artist",
      uri: "spotify:artist:168dgYui7ExaU612eooDF1",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6Q192DXotxtaysaqNPy5yR",
      },
      followers: {
        href: null,
        total: 7959314,
      },
      genres: ["british soul", "indie r&b", "neo soul"],
      href: "https://api.spotify.com/v1/artists/6Q192DXotxtaysaqNPy5yR",
      id: "6Q192DXotxtaysaqNPy5yR",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb2ceb023b10da17590878e88c",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051742ceb023b10da17590878e88c",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1782ceb023b10da17590878e88c",
          width: 160,
        },
      ],
      name: "Amy Winehouse",
      popularity: 73,
      type: "artist",
      uri: "spotify:artist:6Q192DXotxtaysaqNPy5yR",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/73JEBdDEFeVaOLg3y0HhBD",
      },
      followers: {
        href: null,
        total: 343585,
      },
      genres: [
        "folk",
        "folk rock",
        "lilith",
        "mellow gold",
        "new wave pop",
        "pop rock",
        "singer-songwriter",
      ],
      href: "https://api.spotify.com/v1/artists/73JEBdDEFeVaOLg3y0HhBD",
      id: "73JEBdDEFeVaOLg3y0HhBD",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebe2e4304a6e6addc7d3aeb1b9",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174e2e4304a6e6addc7d3aeb1b9",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178e2e4304a6e6addc7d3aeb1b9",
          width: 160,
        },
      ],
      name: "Natalie Merchant",
      popularity: 50,
      type: "artist",
      uri: "spotify:artist:73JEBdDEFeVaOLg3y0HhBD",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0vEsuISMWAKNctLlUAhSZC",
      },
      followers: {
        href: null,
        total: 1511769,
      },
      genres: ["alternative rock", "neo mellow", "pop rock", "rock"],
      href: "https://api.spotify.com/v1/artists/0vEsuISMWAKNctLlUAhSZC",
      id: "0vEsuISMWAKNctLlUAhSZC",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eba6f88c86470fd6350f4a5535",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174a6f88c86470fd6350f4a5535",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178a6f88c86470fd6350f4a5535",
          width: 160,
        },
      ],
      name: "Counting Crows",
      popularity: 66,
      type: "artist",
      uri: "spotify:artist:0vEsuISMWAKNctLlUAhSZC",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3QJzdZJYIAcoET1GcfpNGi",
      },
      followers: {
        href: null,
        total: 1336774,
      },
      genres: ["reggae", "reggae fusion"],
      href: "https://api.spotify.com/v1/artists/3QJzdZJYIAcoET1GcfpNGi",
      id: "3QJzdZJYIAcoET1GcfpNGi",
      images: [
        {
          height: 1333,
          url: "https://i.scdn.co/image/f05f2667aac2bbccd9bf8fcc658b647533257f16",
          width: 1000,
        },
        {
          height: 853,
          url: "https://i.scdn.co/image/8c6081bd641058fada4bc68f35d37b8069cbb909",
          width: 640,
        },
        {
          height: 267,
          url: "https://i.scdn.co/image/7b2416c9e67896deedfb08b1503e9ae4d600f48c",
          width: 200,
        },
        {
          height: 85,
          url: "https://i.scdn.co/image/242871e807e732e86bbc1ee298e9619b333e9bdb",
          width: 64,
        },
      ],
      name: "Damian Marley",
      popularity: 65,
      type: "artist",
      uri: "spotify:artist:3QJzdZJYIAcoET1GcfpNGi",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9",
      },
      followers: {
        href: null,
        total: 17289391,
      },
      genres: [
        "album rock",
        "art rock",
        "classic rock",
        "progressive rock",
        "psychedelic rock",
        "rock",
        "symphonic rock",
      ],
      href: "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
      id: "0k17h0D3J5VfsdmQ1iZtE9",
      images: [
        {
          height: 977,
          url: "https://i.scdn.co/image/e69f71e2be4b67b82af90fb8e9d805715e0684fa",
          width: 1000,
        },
        {
          height: 625,
          url: "https://i.scdn.co/image/d011c95081cd9a329e506abd7ded47535d524a07",
          width: 640,
        },
        {
          height: 195,
          url: "https://i.scdn.co/image/f0a39a8a196a87a7236bdcf8a8708f6d5d3547cc",
          width: 200,
        },
        {
          height: 63,
          url: "https://i.scdn.co/image/ec1fb7127168dbaa962404031409c5a293b95ec6",
          width: 64,
        },
      ],
      name: "Pink Floyd",
      popularity: 77,
      type: "artist",
      uri: "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5wFXmYsg3KFJ8BDsQudJ4f",
      },
      followers: {
        href: null,
        total: 457235,
      },
      genres: ["indie rock"],
      href: "https://api.spotify.com/v1/artists/5wFXmYsg3KFJ8BDsQudJ4f",
      id: "5wFXmYsg3KFJ8BDsQudJ4f",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb642fbb74e3e7507c12d8b8fd",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174642fbb74e3e7507c12d8b8fd",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178642fbb74e3e7507c12d8b8fd",
          width: 160,
        },
      ],
      name: "Manchester Orchestra",
      popularity: 60,
      type: "artist",
      uri: "spotify:artist:5wFXmYsg3KFJ8BDsQudJ4f",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865",
      },
      followers: {
        href: null,
        total: 12375514,
      },
      genres: ["hip hop", "new orleans rap", "pop rap", "rap", "trap"],
      href: "https://api.spotify.com/v1/artists/55Aa2cqylxrFIXC767Z865",
      id: "55Aa2cqylxrFIXC767Z865",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebc63aded6f4bf4d06d1377106",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174c63aded6f4bf4d06d1377106",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178c63aded6f4bf4d06d1377106",
          width: 160,
        },
      ],
      name: "Lil Wayne",
      popularity: 85,
      type: "artist",
      uri: "spotify:artist:55Aa2cqylxrFIXC767Z865",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7AQzXO3NPNQsI7oNu5rC3r",
      },
      followers: {
        href: null,
        total: 349118,
      },
      genres: [
        "alternative metal",
        "alternative rock",
        "grunge",
        "pop rock",
        "post-grunge",
        "rock",
      ],
      href: "https://api.spotify.com/v1/artists/7AQzXO3NPNQsI7oNu5rC3r",
      id: "7AQzXO3NPNQsI7oNu5rC3r",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebc12f77e7db22099b40c86f74",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174c12f77e7db22099b40c86f74",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178c12f77e7db22099b40c86f74",
          width: 160,
        },
      ],
      name: "Marcy Playground",
      popularity: 57,
      type: "artist",
      uri: "spotify:artist:7AQzXO3NPNQsI7oNu5rC3r",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD",
      },
      followers: {
        href: null,
        total: 923000,
      },
      genres: [
        "lilith",
        "mellow gold",
        "new wave pop",
        "permanent wave",
        "pop rock",
        "rock",
      ],
      href: "https://api.spotify.com/v1/artists/4TKTii6gnOnUXQHyuo9JaD",
      id: "4TKTii6gnOnUXQHyuo9JaD",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebf27acad0bc622073d9cab662",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174f27acad0bc622073d9cab662",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178f27acad0bc622073d9cab662",
          width: 160,
        },
      ],
      name: "Sheryl Crow",
      popularity: 65,
      type: "artist",
      uri: "spotify:artist:4TKTii6gnOnUXQHyuo9JaD",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2LIk90788K0zvyj2JJVwkJ",
      },
      followers: {
        href: null,
        total: 2382584,
      },
      genres: ["deep underground hip hop", "kentucky hip hop", "rap"],
      href: "https://api.spotify.com/v1/artists/2LIk90788K0zvyj2JJVwkJ",
      id: "2LIk90788K0zvyj2JJVwkJ",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebed3a04c76cbc92b97f59c3c0",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174ed3a04c76cbc92b97f59c3c0",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178ed3a04c76cbc92b97f59c3c0",
          width: 160,
        },
      ],
      name: "Jack Harlow",
      popularity: 84,
      type: "artist",
      uri: "spotify:artist:2LIk90788K0zvyj2JJVwkJ",
    },
  ],
};
