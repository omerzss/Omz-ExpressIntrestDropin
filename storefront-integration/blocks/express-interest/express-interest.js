/**
 * Express Interest block - renders the Express Interest form drop-in.
 * Add this block to your EDS/boilerplate storefront (e.g. accs-citisignal).
 *
 * Block config (first row = keys, second = values):
 * | baseurl |
 * | https://your-app.runtime.adobe.io |
 */

import { readBlockConfig } from '../../scripts/aem.js';
import { render as provider } from '@dropins/express-interest/render.js';
import ExpressInterestForm from '@dropins/express-interest/containers/ExpressInterestForm.js';

export default async function decorate(block) {
  const config = readBlockConfig(block);

  // Hide configuration rows
  const children = [...block.children];
  children.forEach((child) => {
    child.style.display = 'none';
  });

  const baseurl = config.baseurl?.trim?.();
  if (!baseurl) {
    block.innerHTML = '<p class="express-interest-error">Express Interest: Configure baseurl in block settings.</p>';
    return;
  }

  const baseUrl = baseurl.replace(/\/$/, '');
  const container = document.createElement('div');
  container.className = 'express-interest-container';
  block.appendChild(container);

  await provider.render(ExpressInterestForm, { baseUrl })(container);
}
