/**
 * Production build:
 *
 *  1. Extract the <script type="text/babel"> block from riyan.world.html.
 *  2. Transpile JSX -> plain JS with @babel/core (preset-env + preset-react).
 *  3. Minify the JS with terser (mangles names, drops comments, compresses).
 *  4. Strip the @babel/standalone CDN <script> (we no longer need runtime Babel).
 *  5. Re-inject the minified JS as a regular <script>.
 *  6. Run html-minifier-terser on the final HTML.
 *  7. Copy a whitelist of referenced assets to dist/. Anything else stays out
 *     of the public deploy.
 *  8. Add .nojekyll + robots.txt.
 */

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const { minify: minifyJS } = require('terser');
const { minify: minifyHTML } = require('html-minifier-terser');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SOURCE = path.join(ROOT, 'riyan.world.html');

// Whitelist of files actually referenced by the portfolio.
// Anything outside this list stays out of the public deployment.
const ASSETS = [
  'index.html',
  'vercel.json',

  // Compartmentalized assets (CSS, data, particles)
  'assets/portfolio.css',
  'assets/portfolio-data.js',
  'assets/particles.js',


  // Photos & background
  'uploads/jpan wpper.jpg',
  'uploads/Photo Pro Riyan 2.jpg',
  'uploads/Riyan Spotify Anime.png',

  // CV (publicly downloadable from the portfolio)
  'uploads/CV RIYAN PM FR.pdf',

  // Logos used inline
  'uploads/Logo divers/Shippingbo logo.jfif',
  'uploads/Logo divers/Screen Tiktok Deady.png',

  // Game covers
  'uploads/games/Overwatch_circle_logo.svg.png',
  'uploads/games/League-of-Legends-Embleme.png',
  'uploads/games/p5r.jpg',
  'uploads/games/bd3 logo.png',

  // Film posters
  'uploads/Films/Babylon.jpg',
  'uploads/Films/whiplash.jpg',
  'uploads/Films/goodfellas.jpg',
  'uploads/Films/irishman.jpg',
  'uploads/Films/taxi-driver.jpg',

  // Personal-project mockups
  'uploads/pasted-1777140233564-0.png',
  'uploads/pasted-1777140311412-0.png',
  'uploads/pasted-1777141555503-0.png',
  'uploads/pasted-1777143694753-0.png',

  // Screenshots — CinéAppMovies
  'uploads/screens/CINEAPPMOVIES/CINEAPP SCREEN 1.png',
  'uploads/screens/CINEAPPMOVIES/cineappsCreen2.png',
  'uploads/screens/CINEAPPMOVIES/ScreenCliccarte.png',

  // Screenshots — Fooder
  'uploads/screens/APPFOODER SCREEN/01-onboarding.png',
  'uploads/screens/APPFOODER SCREEN/01b-onboarding-cta.png',
  'uploads/screens/APPFOODER SCREEN/02-swipe-deck.png',
  'uploads/screens/APPFOODER SCREEN/03-filters-drawer.png',
  'uploads/screens/APPFOODER SCREEN/04-wishlist.png',
  'uploads/screens/APPFOODER SCREEN/05-detail-modal.png',
  'uploads/screens/APPFOODER SCREEN/05b-detail-modal-menu.png',

  // Screenshots — Overwatch Nexus
  'uploads/screens/OVERWATCH SCREEN/1_enemy-composition-analysis.png',
  'uploads/screens/OVERWATCH SCREEN/2_recommended-counters.png',
  'uploads/screens/OVERWATCH SCREEN/3_map-based-recommendations.png',
  'uploads/screens/OVERWATCH SCREEN/4_detailed-hero-stats.png',

  // Screenshots — SaaS Invoice (app Plombier)
  'uploads/screens/Plbomberie/SCREEN 1 PLOMBIERAPP.png',
  'uploads/screens/Plbomberie/SCREEN 2 PLOMBIERAPP.png',
  'uploads/screens/Plbomberie/SCREEN 3 PLOMBIER APP.png',
  'uploads/screens/Plbomberie/SCREEN 4 APP PLOMBIER.png',
];

const HTML_MINIFY_OPTIONS = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  // JS is already minified above; let html-minifier do a final pass anyway
  minifyJS: false,
  conservativeCollapse: true,
};

const BABEL_OPTIONS = {
  presets: [
    ['@babel/preset-env', { targets: '> 0.5%, last 2 versions, not dead' }],
    ['@babel/preset-react', { runtime: 'classic' }],
  ],
  babelrc: false,
  configFile: false,
  compact: true,
};

const TERSER_OPTIONS = {
  compress: {
    passes: 2,
    drop_console: false,    // keep error logs visible if something breaks
    pure_funcs: [],
  },
  mangle: {
    toplevel: false,        // safer: don't mangle top-level identifiers (React, ReactDOM)
  },
  format: { comments: false },
};

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function copyFile(src, dest) {
  await ensureDir(path.dirname(dest));
  await fs.promises.copyFile(src, dest);
}

function extractScript(html) {
  // Match the inline <script type="text/babel"> ... </script> block.
  const re = /<script type="text\/babel">([\s\S]*?)<\/script>/;
  const match = html.match(re);
  if (!match) throw new Error('Could not find <script type="text/babel"> block');
  return { code: match[1], full: match[0] };
}

function stripBabelStandaloneCDN(html) {
  // Remove <script ... babel ... .min.js"></script>
  return html.replace(
    /<script[^>]*src="https:\/\/unpkg\.com\/@babel\/standalone[^"]*"[^>]*><\/script>\s*/i,
    ''
  );
}

async function build() {
  console.log('Cleaning dist/');
  await fs.promises.rm(DIST, { recursive: true, force: true });
  await ensureDir(DIST);

  console.log('Reading source HTML');
  let html = await fs.promises.readFile(SOURCE, 'utf8');
  const srcSize = html.length;

  console.log('Extracting JSX block');
  const { code: jsxCode, full: scriptTag } = extractScript(html);

  console.log('Transpiling JSX -> JS (@babel/core)');
  const { code: transpiled } = await babel.transformAsync(jsxCode, BABEL_OPTIONS);

  console.log('Minifying JS (terser)');
  const { code: minifiedJS } = await minifyJS(transpiled, TERSER_OPTIONS);

  // Replace original <script type="text/babel">...</script> with a plain <script>
  html = html.replace(scriptTag, `<script>${minifiedJS}</script>`);

  console.log('Stripping @babel/standalone runtime CDN');
  html = stripBabelStandaloneCDN(html);

  console.log('Minifying HTML');
  html = await minifyHTML(html, HTML_MINIFY_OPTIONS);

  await fs.promises.writeFile(path.join(DIST, 'riyan.world.html'), html);

  const ratio = ((1 - html.length / srcSize) * 100).toFixed(1);
  console.log(
    `  ${(srcSize / 1024).toFixed(1)} KB -> ${(html.length / 1024).toFixed(1)} KB (${ratio}% smaller)`
  );

  console.log('Copying whitelisted assets');
  let copied = 0,
    missing = 0;
  for (const rel of ASSETS) {
    const src = path.join(ROOT, rel);
    if (!fs.existsSync(src)) {
      console.warn(`  missing: ${rel}`);
      missing += 1;
      continue;
    }
    await copyFile(src, path.join(DIST, rel));
    copied += 1;
  }
  console.log(`  ${copied} files copied, ${missing} missing`);

  await fs.promises.writeFile(path.join(DIST, '.nojekyll'), '');
  await fs.promises.writeFile(
    path.join(DIST, 'robots.txt'),
    'User-agent: *\nDisallow: /uploads/\nAllow: /\n'
  );

  console.log('Build complete -> dist/');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
