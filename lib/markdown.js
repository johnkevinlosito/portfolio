import { unified } from 'unified';
import parse from 'remark-parse';
import remarkHtml from 'remark-html';
import * as highlight from 'rehype-highlight';
import gfm from 'remark-gfm';
import matter from 'gray-matter';

export const sanitizeDevToMarkdown = (markdown) => {
  let correctedMarkdown = '';

  const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), 'g');
  correctedMarkdown = markdown.replace(replaceSpaceCharRegex, ' ');

  const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g;
  return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, '$& ');
}

export const convertMarkdownToHtml = (markdown) => {

  const { content } = matter(markdown);

  const html = unified()
    .use(parse)
    .use(gfm)
    .use(highlight)
    .use(remarkHtml)
    .processSync(content);

  return String(html);
}