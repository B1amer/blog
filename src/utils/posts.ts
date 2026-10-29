import type { CollectionEntry } from 'astro:content';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function getPostSlug(post: CollectionEntry<'blog'>): string {
  if (post.data.permalink) {
    return post.data.permalink.replace(/^\/|\/$/g, '');
  }
  const d = post.data.pubDate;
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const rawSlug = post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx?$/, '');
  return `${year}/${month}/${day}/${rawSlug}`;
}

export function getPostUrl(post: CollectionEntry<'blog'>): string {
  return withBase(`/${getPostSlug(post)}/`);
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
