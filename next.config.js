const withPWA = require("next-pwa");
const slugify = require("slugify");

const slugOptions = {
  lower: true,
};
const songs = require("./songs.json");

const additionalEntries = [
  ...songs.map(song => ({ url: `/nomor/${song.number}.html`, revision: null })),
  ...songs.map(song => ({ url: `/judul/${slugify(song.title.split(". ")[1], slugOptions)}.html`, revision: null})),
];

module.exports = withPWA({
  // Target must be serverless
  target: "serverless",
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    additionalManifestEntries: additionalEntries
  },
});
