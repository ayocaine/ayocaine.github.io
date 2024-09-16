const e="Guides/site-search.mdx",t="docs",n="guides/site-search",s=`import Callout from "@/components/Callout.astro";

By default, CelestialDocs sites include full-text search powered by [Fuse.js](https://www.fusejs.io/), which is a fast and low-bandwidth search tool for static sites.

No configuration is required to enable search. Build and deploy your site, then use the search bar in the site header to find content.

<Callout variant="info">
You can trigger search using keyboard shortcut also. Just press \`ctrl\` + \`K\`
</Callout>

## Hide search

In \`config.js\`, you can disable the search function by keeping the value of \`hide_search\` as \`true\`.

\`\`\`js
// config.js

export const docconfig = {
  ...
  hide_search: true,
  ...
};
\`\`\`
`,a={title:"Site Search",author:"HYP3R00T",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},o={type:"content",filePath:"/home/runner/work/ayocaine.github.io/ayocaine.github.io/src/content/docs/Guides/site-search.mdx",rawData:void 0};export{o as _internal,s as body,t as collection,a as data,e as id,n as slug};
