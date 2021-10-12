import axios from 'axios';
import { sanitizeDevToMarkdown, convertMarkdownToHtml } from './markdown';

const websiteURL = 'https://johnkevinlosito.com/posts/';

const convertDevtoResponseToArticle = (article) => {
  const localSlug = convertCanonicalURLToRelative(article.canonical_url);
  const markdown = sanitizeDevToMarkdown(article.body_markdown);
  const html = convertMarkdownToHtml(markdown);
  return { ...article, localSlug, markdown, html };
}
export const getAllArticles = async () => {
  const params = { per_page: 1000 };
  const headers = { 'api-key': process.env.DEVTO_APIKEY };
  const { data } = await axios.get(`https://dev.to/api/articles/me/published`, { params, headers });
  const articles = data.filter((article) => article.canonical_url.startsWith(websiteURL));
  return articles.map(convertDevtoResponseToArticle);
}

export const convertCanonicalURLToRelative = (canonicalURL) => {
  return canonicalURL.replace(websiteURL, '');
}

export const getArticleFromCache = async (cache, localSlug) => {
  const cachedArticle = cache.find(cachedArticle => cachedArticle.localSlug === localSlug);
  return cachedArticle;
}