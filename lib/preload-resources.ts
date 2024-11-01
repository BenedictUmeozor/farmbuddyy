'use client';

import ReactDOM from 'react-dom';

export function PreloadHomePageResources() {
  ReactDOM.preload('/hero.svg', { as: 'image', fetchPriority: 'high' });
  return null;
}

export function PreloadAuthPageResources() {
  ReactDOM.preload('/authbg.svg', { as: 'image', fetchPriority: 'high' });
  return null;
}
