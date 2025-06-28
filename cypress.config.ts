import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://qaapp.xyicon.com",
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,


    setupNodeEvents(on, config) {
      // implement node event listeners here
       
    },
  },
});
