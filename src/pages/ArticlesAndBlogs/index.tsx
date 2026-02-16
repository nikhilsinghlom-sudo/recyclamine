import React from 'react';
import ArticlesBlogs from '../../components/ArticlesBlogs';
import InsideHeader from "../../components/InsideHeader";

const ArticlesBlogsIndex: React.FC = () => {
  return (
    <>


    
          <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/articles-and-blogs/articles-and-blogs-banner.jpg`} title="Articles and Blogs" alt_title="Articles and Blogs" />

          <ArticlesBlogs/>
    
    </>
  );
};

export default ArticlesBlogsIndex;