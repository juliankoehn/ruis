import { readdirSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { NavItem } from '@ruids/components/dist/components/SideNavbar/src/types';
import parseMD from '@/utils/parseMD';

const docsDirectory = join(process.cwd(), '_docs');

// this lil nice feature is not able to run on netlify
// we cannot generate the navigation on run time
// BUT we could generate all content on build time? :>
// we can use getStaticPaths from nextjs for that

export type ContentItem = {
  type: 'group' | 'item';
  title: string;
  description: string;
  to: string;
  icon?: string;
  children: ContentItem[];
  content?: string;
  examples?: string[];
};

// construct navigation
function constructNavigation(dir: string, path: string, pages: ContentItem[]) {
  const files = readdirSync(dir, {
    withFileTypes: true,
  });

  if (existsSync(join(dir, 'index.md'))) {
    // wenn index.md = item
    const pwd = join(dir, 'index.md');
    const context = readFileSync(pwd, 'utf8');
    const res = parseMD(context);

    const el: ContentItem = {
      type: 'item',
      title: res.metadata.title,
      description: res.metadata.description ?? '',
      content: res.content,
      to: path,
      icon: res.metadata.icon ?? null,
      children: [],
    };

    files.forEach((file) => {
      if (file.isDirectory()) {
        // continue the chain
        el.children = constructNavigation(
          join(dir, file.name),
          `${path}/${file.name}`,
          el.children,
        );
      }
    });

    pages.push(el);
  } else {
    // sonst type = group
    files.forEach((file) => {
      if (file.isDirectory()) {
        // continue the chain
        pages = constructNavigation(
          join(dir, file.name),
          `${path}/${file.name}`,
          pages,
        );
      }
    });
  }

  return pages;
}

export function getContentByPath(slug: string | string[]) {
  const dir = docsDirectory;
  let path = '';
  if (typeof slug === 'string') {
    path = slug;
  } else {
    slug.forEach((s) => {
      path = `${path}/${s}`;
    });
  }
  path = `${path.replace(/^\/+/g, '')}`;

  const webPath = path;

  path = join(dir, path);

  const pwd = join(path, 'index.md');

  if (existsSync(pwd)) {
    const context = readFileSync(pwd, 'utf8');
    const res = parseMD(context);

    // find all other .md files except index.md
    // and push the content to `examples` as rawString
    const files = readdirSync(path, {
      withFileTypes: true,
    });

    const examples: string[] = [];

    files.forEach((dirent) => {
      if (dirent.isFile && dirent.name !== 'index.md') {
        const context = readFileSync(join(path, dirent.name), 'utf8');
        examples.push(context);
      }
    });

    const item: ContentItem = {
      type: 'item',
      title: res.metadata.title,
      description: res.metadata.description ?? '',
      content: res.content,
      to: `/${webPath}`,
      icon: res.metadata.icon ?? null,
      children: [],
      examples: examples,
    };

    return item;
  }

  return null;
}

export function getAllDocs() {
  const dir = docsDirectory;
  const res = constructNavigation(dir, '', []);

  return {
    content: res,
  };
}
