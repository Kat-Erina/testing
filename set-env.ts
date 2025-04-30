import * as fs from 'fs';

// Set the path to `environment.prod.ts`
const filePath = './src/environments/environment.prod.ts';

// Fetch the token from environment variables
const token = process.env['NG_APP_API_TOKEN'] ?? '';

// Update `environment.prod.ts` with the token value
const content = `export const environment = {
  production: true,
  myApiToken: '${token}'
};`;

fs.writeFileSync(filePath, content);
console.log(`✅ environment.prod.ts updated with token`);
