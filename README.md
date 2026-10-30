# Sharpnet AS website

Static site (English at `/`, Norwegian at `/no/`) with Home and Contact.
No cookies, analytics, third-party scripts or external requests. Inter is self-hosted.

```sh
npm test                 # builds and checks pages, links, hreflang, no external requests
npm run build            # writes dist/
npm run build:production # same, but fails while any TODO_OWNER: placeholder remains
```

## Config

Company details, site URL and the "last updated" date are in `site.config.json`. Page text is in `content.mjs`.
`SITE_URL=... npm run build` overrides `siteUrl` for one build. All internal links are relative.

## Deploy on Cloudflare

Cloudflare dashboard, Workers & Pages, Create, import this repo (Workers Builds):

- Build command: `npm run build:production`
- Deploy command: `npx wrangler deploy` (reads `wrangler.jsonc`, serves `dist/` as static assets)
- Node 22 comes from `.nvmrc`

Then add the custom domains `sharpnet.no` and `www.sharpnet.no` under the Worker's Settings, Domains & Routes
(`siteUrl` is the bare domain). The DNS for the domain is on Cloudflare, so the records are created automatically.
