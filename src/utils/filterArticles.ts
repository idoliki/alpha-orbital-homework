import { IArticle } from '@/types/IArticle';

const filterArticles = (
   query: string,
   category: string | number,
   articles: IArticle[],
   removedArticles?: string[]
) => {
   const articlesInActiveCategory: IArticle[] = [];

   let filteredArticles = articles.filter((article) => {
      let articleIsInActiveCategory = true;

      if (category) {
         if (article.post_category_id !== category.toString()) {
            articleIsInActiveCategory = false;
         } else {
            articlesInActiveCategory.push(article);
         }
      } else {
         articlesInActiveCategory.push(article);
      }

      return (
         article.title.toLowerCase().includes(query.toLowerCase()) &&
         articleIsInActiveCategory
      );
   });

   if (filteredArticles.length === 0) {
      filteredArticles = articlesInActiveCategory;
   }

   if (removedArticles && removedArticles.length) {
      filteredArticles = filteredArticles.filter(
         (article) => !removedArticles.includes(article.slug)
      );
   }

   return filteredArticles;
};

export default filterArticles;
