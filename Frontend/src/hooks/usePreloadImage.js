import { useState, useEffect } from 'react';

export const preloadImage = (url) =>
  new Promise(resolve => {
    const img = new Image();
    img.onload  = () => resolve({ url, type: 'image', element: img });
    img.onerror = () => resolve({ url, type: 'image', element: img, failed: true });
    img.src = url;
  });

const preloadSvg = (url) =>
  fetch(url)
    .then(res => res.text())
    .then(svgText => ({ url, type: 'svg', svgText }))
    .catch(() => ({ url, type: 'svg', svgText: null, failed: true }));

const preloadVideo = (url) =>
  new Promise(resolve => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.oncanplaythrough = () => resolve({ url, type: 'video', element: video });
    video.onerror          = () => resolve({ url, type: 'video', element: video, failed: true });
    video.src = url;
    video.load();
  });

const LOADERS = {
  image: preloadImage,
  svg:   preloadSvg,
  video: preloadVideo,
};

// Accept: string url OR { url, type } object
const normalizeEntry = (entry) => {
  if (typeof entry === 'string') return { url: entry, type: 'image' }; // default to image
  return { url: entry.url, type: entry.type ?? 'image' };
};

export function usePreloadMedia(entries) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!Array.isArray(entries) || entries.length === 0) return;

    let cancelled = false;

    const loaders = entries.map(entry => {
      const { url, type } = normalizeEntry(entry);
      const load = LOADERS[type] ?? preloadImage;
      return load(url);
    });

    Promise.all(loaders).then(results => {
      if (!cancelled) {
        setItems(results);
        setReady(true);
      }
    });

    return () => { cancelled = true; };

  }, [JSON.stringify(entries)]);

  return { items, ready };
}