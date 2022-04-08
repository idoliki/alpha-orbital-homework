import React from 'react';

import ArticleCard from '@/components/ArticleCard';

import { Grid } from '@/ui/layout';

import type { IArticle } from '@/types/IArticle';

type PageProps = {
   articles: IArticle[];
};

const ArticleList: React.FC<PageProps> = ({ articles }) => {
   return (
      <Grid cols={3} spacing='xlarge'>
         {articles.map((article, i) => {
            return (
               <div key={article.slug}>
                  <ArticleCard
                     article={article}
                     imagePriority={i < 7}
                  ></ArticleCard>
               </div>
            );
         })}
      </Grid>
   );
};

export default ArticleList;
