import axios from 'axios';

const websiteURL = 'https://johnkevinlosito.com';

export const getAllArticles = async () => {
  const params = { per_page: 1000 };
  const headers = { 'api-key': process.env.DEVTO_APIKEY };
  const { data } = await axios.get(`https://dev.to/api/articles/me/published`, { params, headers });
  const articles = data.filter((article) => article.canonical_url.startsWith(websiteURL));
  return articles;
}
