import React from "react";
import XlArticle from "../subComponents/XlArticle";
import LinearDeterminate from "../subComponents/LinearDeterminate";
import BigArticle from "../subComponents/BigArticle";
import HeadlineWithImg from "../subComponents/HeadlineWithImg";
import SmallHeadlines from "../subComponents/SmallHeadlines";

function LangComp(props) {
   const data = props.news;
   return (
      <div className="main-container">
         <div className="left-section-news">
            {data ? (
               data
                  .filter((art) => !!art.urlToImage && !!art.url)
                  .slice(6, 7)
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
                     (art) =>
                        !!art.description && !!art.urlToImage && !!art.author
                  )
                  .slice(3, 6)
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
         <div className="right-section-news">
            {data ? (
               data
                  .filter((art) => !!art.urlToImage && !!art.title && !!art.url)
                  .slice(0, 5)
                  .map((article) => (
                     <HeadlineWithImg
                        imgurl={article.urlToImage}
                        headline={article.title}
                        url={article.url}
                     />
                  ))
            ) : (
               <LinearDeterminate />
            )}
         </div>
         <div className="firstSectionNews">
            <div className="blackTitle">Top Stories</div>
            {data ? (
               data
                  .slice(5, 15)
                  .map((article) => (
                     <SmallHeadlines
                        headline={article.title}
                        url={article.url}
                     />
                  ))
            ) : (
               <LinearDeterminate />
            )}
         </div>
      </div>
   );
}

export default LangComp;
