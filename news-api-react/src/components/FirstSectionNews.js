import React from "react";
import SmallHeadlines from "../subComponents/SmallHeadlines";
import LinearDeterminate from "../subComponents/LinearDeterminate";
import useFetch from "../subComponents/myFetchHook";

function FirstSectionNews() {
   const { data, isLoading } = useFetch("home/top");

   return (
      <div className="firstSectionNews">
         <div className="blackTitle">Top Stories</div>
         {data ? (
            data
               .slice(6, 17)
               .map((article) => (
                  <SmallHeadlines headline={article.title} url={article.url} />
               ))
         ) : (
            <LinearDeterminate />
         )}
      </div>
   );
}

export default FirstSectionNews;
