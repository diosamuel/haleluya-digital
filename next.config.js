const withPWA = require("next-pwa");
const slugify = require("slugify");
const buildId = Math.random() * 1_000_000_000;

const slugOptions = {
  lower: true,
};
const songs = require("./songs.json");

const additionalEntries = [
  ...songs.map(song => ({ url: `/nomor/${song.number}.html`, revision: null })),
  ...songs.map(song => ({ url: `/judul/${slugify(song.title.split(". ")[1], slugOptions)}.html`, revision: null})),
  ...songs.map(song => ({ url: `_next/data/${buildId}/nomor/${song.number}.json`, revision: null})),
  ...songs.map(song => ({ url: `_next/data/${buildId}/judul/${slugify(song.title.split(". ")[1], slugOptions)}.json`, revision: null})),
];

module.exports = withPWA({
  // Target must be serverless
  target: "serverless",
  generateBuildId: () => {
    return String(buildId);
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    additionalManifestEntries: additionalEntries
  },
});
