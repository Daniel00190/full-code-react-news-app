import React from "react";

export default function SmallHeadlines(props) {
   return (
      <div className="headline">
         <a href={props.url} target="_blank">{props.headline}</a>
      </div>
   );
}
