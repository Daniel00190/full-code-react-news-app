import React from "react";
import XlArticle from "../subComponents/XlArticle";
import HeadlineWithImg from "../subComponents/HeadlineWithImg";
import LinearDeterminate from "../subComponents/LinearDeterminate";
import useFetch from "../subComponents/myFetchHook";

export default function SecondGridFirstArea() {
   const url = "topics/sports";
   const { data, isLoading } = useFetch(url);

   return data ? (
      <div className="left-section-news">
         {data
            .filter((art) => !!art.urlToImage && !!art.url)
            .slice(0, 1)
            .map((article) => (
               <XlArticle
                  imgURL={article.urlToImage}
                  headline={article.title.slice(0, 90) + "..."}
                  link={article.url}
               />
            ))}
         <div className="headlineSideBySide">
            {data
               .filter(
                  (art, index) =>
                     !!art.urlToImage &&
                     !!art.url &&
                     data.indexOf(art) === index
               )
               .slice(1, 2)
               .map((article) => (
                  <HeadlineWithImg
                     imgurl={article.urlToImage}
                     headline={article.title.slice(0, 90) + "..."}
                     url={article.url}
                  />
               ))}
            {data
               .filter(
                  (art, index) =>
                     !!art.urlToImage &&
                     !!art.url &&
                     data.indexOf(art) === index
               )
               .slice(3, 4)
               .map((article) => (
                  <HeadlineWithImg
                     imgurl={article.urlToImage}
                     headline={article.title.slice(0, 90) + "..."}
                     url={article.url}
                  />
               ))}
         </div>
         <div className="headlineSideBySide">
            {data
               .filter(
                  (art, index) =>
                     !!art.urlToImage &&
                     !!art.url &&
                     data.indexOf(art) === index
               )
               .slice(5, 6)
               .map((article) => (
                  <HeadlineWithImg
                     imgurl={article.urlToImage}
                     headline={article.title.slice(0, 90) + "..."}
                     url={article.url}
                  />
               ))}
            {data
               .filter(
                  (art, index) =>
                     !!art.urlToImage &&
                     !!art.url &&
                     data.indexOf(art) === index
               )
               .slice(7, 8)
               .map((article) => (
                  <HeadlineWithImg
                     imgurl={article.urlToImage}
                     headline={article.title.slice(0, 90) + "..."}
                     url={article.url}
                  />
               ))}
         </div>
         <div className="headlineSideBySide">
            {data
               .filter(
                  (art, index) =>
                     !!art.urlToImage &&
                     !!art.url &&
                     data.indexOf(art) === index
               )
               .slice(9, 10)
               .map((article) => (
                  <HeadlineWithImg
                     imgurl={article.urlToImage}
                     headline={article.title.slice(0, 90) + "..."}
                     url={article.url}
                  />
               ))}
            {data
               .filter(
                  (art, index) =>
                     !!art.urlToImage &&
                     !!art.url &&
                     data.indexOf(art) === index
               )
               .slice(11, 12)
               .map((article) => (
                  <HeadlineWithImg
                     imgurl={article.urlToImage}
                     headline={article.title.slice(0, 90) + "..."}
                     url={article.url}
                  />
               ))}
         </div>
      </div>
   ) : (
      <LinearDeterminate />
   );
}
