const slugify = require("slugify");

export const slugTitle = (title) => {
  const slugOptions = {
    lower: true,
  };
  return slugify(title.split(". ")[1], slugOptions);
};
