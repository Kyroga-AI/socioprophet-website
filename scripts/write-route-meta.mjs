import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Link previews (WhatsApp, Facebook, LinkedIn) don't run JavaScript, so shareable routes get their own
// copy of index.html with route-specific meta tags. firebase.json rewrites each path to its file.
const SITE = "https://socioprophet.com";
const ROUTES = [
  {
    path: "/products/noetica/beta",
    file: "dist/products/noetica/beta.html",
    title: "Noetica free edition waitlist | SocioProphet",
    description: "Stop renting AI. Start building a brain you own & don't give it away. Free, self-managed Noetica runs on your own computer: no AI bills, and your IP stays on your machine.",
    image: "/og-noetica-free-edition.png",
  },
];

const base = readFileSync("dist/index.html", "utf8");

for (const route of ROUTES) {
  const url = SITE + route.path;
  const image = SITE + route.image;
  const setContent = (html, attr, value) =>
    html.replace(new RegExp(`(<meta ${attr} content=")[^"]*`), `$1${value}`);

  let html = base.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
  html = setContent(html, 'name="description"', route.description);
  html = setContent(html, 'property="og:title"', route.title);
  html = setContent(html, 'property="og:description"', route.description);
  html = setContent(html, 'name="twitter:title"', route.title);
  html = setContent(html, 'name="twitter:description"', route.description);
  html = html.replace(
    "</head>",
    [
      `  <meta property="og:url" content="${url}" />`,
      `    <meta property="og:image" content="${image}" />`,
      `    <meta property="og:image:width" content="1200" />`,
      `    <meta property="og:image:height" content="630" />`,
      `    <meta name="twitter:image" content="${image}" />`,
      `    <link rel="canonical" href="${url}" />`,
      "  </head>",
    ].join("\n"),
  );

  if (!html.includes(`<title>${route.title}</title>`) || !html.includes(`content="${route.description}"`)) {
    throw new Error(`Meta tags for ${route.path} were not applied; check index.html still has them.`);
  }

  mkdirSync(dirname(route.file), { recursive: true });
  writeFileSync(route.file, html);
  console.log(`wrote ${route.file}`);
}
