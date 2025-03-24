module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.ignores.add("README.md");

  return {
    dir: {
      input: ".",
      output: "docs",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
