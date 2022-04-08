import { IArticle } from '@/types/IArticle';
const API_ROOT_URL = 'https://www.alpha-orbital.com';

const getArticles = async () => {
   const res = await fetch(`${API_ROOT_URL}/last-100-news.json`);
   const articles: IArticle[] = await res.json();
   return articles;
};

export default getArticles;
