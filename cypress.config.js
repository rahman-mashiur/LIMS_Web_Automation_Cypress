const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://103.84.36.246:81/',
    experimentalRunAllSpecs: true,
    "reporter": "mochawesome",
    "reporterOptions":{
      "charts":true,
      "overwrite":false,
      "html":false,
      "json":true,
      "reportDir": "cypress/reports"
    }
  },
});
