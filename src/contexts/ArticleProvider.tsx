import React from 'react';

type ContextType = {
   removedArticles: string[];
   setRemovedArticles: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ArticleContext = React.createContext<ContextType>({
   removedArticles: [],
   setRemovedArticles: () => ({}),
});

const ArticleProvider: React.FC = ({ children }) => {
   const [removedArticles, setRemovedArticles] = React.useState<string[]>([]);
   return (
      <ArticleContext.Provider value={{ removedArticles, setRemovedArticles }}>
         {children}
      </ArticleContext.Provider>
   );
};

ArticleContext.displayName = 'ArticleContext';

export default ArticleProvider;
