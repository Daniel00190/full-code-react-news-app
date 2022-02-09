import React from "react";
import BigArticle from "../subComponents/BigArticle";
import XlArticle from "../subComponents/XlArticle";
import LinearDeterminate from "../subComponents/LinearDeterminate";
import useFetch from "../subComponents/myFetchHook";

function LeftSideNews() {
   const { data, isLoading } = useFetch("home/top");

   return (
      <div className="left-section-news ">
         {data ? (
            data
               .filter((art) => !!art.urlToImage && !!art.url)
               .slice(0, 1)
               .map((article) => (
                  <XlArticle
                     imgURL={article.urlToImage}
                     headline={article.title}
                     link={article.url}
                  />
               ))
         ) : (
            <LinearDeterminate />
         )}
         {data ? (
            data
               .filter(
                  (art) => !!art.description && !!art.urlToImage && !!art.author
               )
               .slice(1, 5)
               .map((article) => (
                  <BigArticle
                     key={article.url}
                     headline={article.title}
                     author={article.author}
                     time={article.publishedAt}
                     description={article.description}
                     imgURL={article.urlToImage}
                     url={article.url}
                  />
               ))
         ) : (
            <LinearDeterminate />
         )}
      </div>
   );
}

export default LeftSideNews;
