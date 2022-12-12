const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 3000,
    experimentalSessionAndOrigin: true,
    baseUrl: "https://joliverhodges.com/",
  },
});
