import React from "react";
import HeadlineWithImg from "../subComponents/HeadlineWithImg";
import LinearDeterminate from "../subComponents/LinearDeterminate";
import useFetch from "../subComponents/myFetchHook";

export default function TopSection() {
   const url = "home/tech";
   const { data, isLoading, hasError, errorMessage, updateUrl } = useFetch(url);

   return (
      <div className="topSection">
         {data ? (
            data
               .filter((art) => !!art.urlToImage)
               .slice(6, 11)
               .map((article) => (
                  <div className="topSectionDiv">
                     <HeadlineWithImg
                        imgurl={article.urlToImage}
                        headline={article.title.slice(0, 80) + "..."}
                        url={article.url}
                     />
                  </div>
               ))
         ) : (
            <LinearDeterminate />
         )}
      </div>
   );
}
