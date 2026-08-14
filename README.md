# CVAi Growboard

Manufacturer-facing operating intelligence application for the CVAi thcgrowery product family.

## Stack

- Astro 7
- strict TypeScript
- Tailwind CSS 4
- selective Preact islands
- static-first build suitable for Cloudflare Pages

## State

This public build uses coherent synthetic demonstration data. It is intentionally separated from the private `smavgs/thcgrowery` repository and does not contain customer credentials, raw facility evidence, private keys, or proprietary backend source.

## Cloudflare Pages

Use Git integration with:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

## GitHub Pages fallback

A GitHub Actions workflow is included. If Pages is enabled in repository settings with **GitHub Actions** as the publishing source, pushes to `main` deploy automatically.
