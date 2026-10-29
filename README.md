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

## Deploy on Cloudflare Pages

Cloudflare dashboard, Workers & Pages, Create, Pages, Connect to Git, pick this repo:

- Production branch: `main`
- Build command: `npm run build:production`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `22`

Then add the custom domain `sharpnet.no` under the project's Custom domains tab.
If the domain's DNS is not on Cloudflare, Cloudflare shows the records to add at the DNS host.
