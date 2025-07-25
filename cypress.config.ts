import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://qaapp.xyicon.com",
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    
     env: {
      apibaseUrl: "https://qaapi.xyicon.com" // API Base URL
      
    },

   //supportFile: "cypress/support/e2e.ts",

    setupNodeEvents(on, config) {
      // implement node event listeners here
       
    },
  },
});
