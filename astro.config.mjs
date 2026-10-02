import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://instituutsoleil.be',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
