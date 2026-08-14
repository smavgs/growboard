import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  output: 'static',
  site: isGitHubPages ? 'https://smavgs.github.io' : undefined,
  base: isGitHubPages ? '/growboard' : '/',
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()]
  }
});
