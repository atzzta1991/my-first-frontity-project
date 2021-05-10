const settings = {
  name: "my-first-frontity-project",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Investment in Practice",
      description: "Blog for investment in practice",
      postTypes: [
        {
          type: "destinations",
          endpoint: "destinations",
          archive: "/destinations",
        },
      ],
    },
  },
  packages: [
    {
      name: "my-first-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://test.frontity.org",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
