import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run konbu-editor:serve:development',
        production: 'nx run konbu-editor:serve:production',
      },
      ciWebServerCommand: 'nx run konbu-editor:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
