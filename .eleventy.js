module.exports = function(eleventyConfig) {
  // Passthrough copy for assets (like images and CSS)
  eleventyConfig.addPassthroughCopy("src/assets");

  // 1. COLLECTIONS
  // Collect all plant pages
  eleventyConfig.addCollection("plants", function(collectionApi) {
    return collectionApi.getFilteredByTag("plant");
  });

  // Collect season pages (assuming they're tagged with "season")
  eleventyConfig.addCollection("seasons", function(collectionApi) {
    return collectionApi.getFilteredByTag("season");
  });

  // 2. FILTER TO SHOW ONLY PLANTS WITH SPECIFIC SEASON TAG
  eleventyConfig.addFilter("filterByTag", (collection, tag) => {
    return collection.filter(item => item.data.tags && item.data.tags.includes(tag));
  });

  // 3. RETURN SETTINGS
  return {
    dir: {
      input: "src",     // Source folder
      output: "dist"    // Output folder
    }
  };
};
