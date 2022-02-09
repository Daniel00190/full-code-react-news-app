import React from "react";

import LinearDeterminate from "../subComponents/LinearDeterminate";

export default function ComPage(props) {
   const data = props.news;
   return (
      <div className="card_container">
         {data ? (
            data
               .filter((art) => !!art.urlToImage && !!art.url)
               .slice(0, 20)
               .map((article) => (
                  <a href={article.url}>
                     <div className="card_image">
                        <img src={article.urlToImage} alt="" srcset="" />
                     </div>
                     <div className="bottom_part">
                        <h3>{article.title}</h3>
                     </div>
                  </a>
               ))
         ) : (
            <LinearDeterminate />
         )}
      </div>
   );
}
