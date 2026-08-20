import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

async function prerender() {
  console.log('🚀 Starting Static Prerendering (SSG)...');

  const distPath = path.resolve(process.cwd(), 'dist');
  const indexPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexPath)) {
    throw new Error(`dist/index.html not found at ${indexPath}. Please run vite build first.`);
  }

  // Render React App component to static HTML string
  const appHtml = renderToString(React.createElement(App));

  // Read the built index.html
  let template = fs.readFileSync(indexPath, 'utf-8');

  // Replace <div id="root"></div> with the full prerendered HTML
  if (template.includes('<div id="root"></div>')) {
    template = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  } else if (template.includes('<div id="root">')) {
    // Handle case if already modified
    template = template.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`);
  } else {
    console.warn('⚠️ Warning: <div id="root"> tag not found in dist/index.html');
  }

  // Write the completed prerendered HTML back to dist/index.html
  fs.writeFileSync(indexPath, template, 'utf-8');

  console.log('✅ Static Prerendering complete! Injected full static HTML into dist/index.html.');
}

prerender().catch((err) => {
  console.error('❌ Prerender Error:', err);
  process.exit(1);
});
