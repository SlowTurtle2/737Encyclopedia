# Deploy on Netlify

The repository is configured as a static Vinext export. Netlify reads
`netlify.toml`, runs `pnpm build:netlify`, and publishes the `dist/client`
directory.

## Git deployment

1. Push the `encyclopedia` directory as the root of a Git repository.
2. In Netlify, choose **Add new project** and import that repository.
3. Keep the settings detected from `netlify.toml`.
4. Deploy the project.

## Manual deployment

Run `pnpm build:netlify`, then upload the generated `dist/client` directory in
Netlify.

The current site has no server-side account or payment implementation. When
those features are added, the Netlify architecture will need functions or an
external authentication and payment service.
