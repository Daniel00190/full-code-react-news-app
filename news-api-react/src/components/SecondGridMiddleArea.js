import React from "react";
import BigArticle from "../subComponents/BigArticle";
import LinearDeterminate from "../subComponents/LinearDeterminate";
import useFetch from "../subComponents/myFetchHook";

export default function SecondGridMiddleArea() {
   const { data, isLoading } = useFetch("home/entertainment");

   return (
      <div className="secondGridMiddleArea">
         {data ? (
            data
               .filter(
                  (art) => !!art.description && !!art.urlToImage && !!art.author
               )
               .slice(0, 5)
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
