# LNCM Web

A simple website for LNCM, using Gatsby.

## Important

When using `https://lncm.github.io` to serve the static site, Github requires the generated HTML to be published to the `master` branch, so we are using `source` as the main source code branch. ([More info](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)).

## Develop

Clone the (default) `source` branch. Ensure you have nodejs 8+ installed, and run `npm i` to install deps. Then start the development server with `npm start`.

## Modify Content

Add Images / Markdown files in the `src/data` directory (or in `pages` for new root pages). Markdown files should have the data specified (see existing files for example).

## Deploy

To generate the static HTML, run `npm run build`.  Use `npm run serve` to test the build.

If you run into an error when building, try `rm -rf .cache`.

Serve the generated `public` directory from anywhere (note: additional config required for non-root domain).

You can use `npm run deploy`, which will push the contents of `public` to the `master` branch on Github.

## TODOs

See issues for TODOs
