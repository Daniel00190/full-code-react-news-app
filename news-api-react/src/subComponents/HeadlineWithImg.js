import React from "react";

export default function HeadlineWithImg(props) {
   return (
      <div className="headlineWithImg">
         <a href={props.url} target="_blank">
            <div className="onlyImg">
               <img src={props.imgurl} alt="" srcSet="" />
            </div>
            <div className="alignHeadline">{props.headline}</div>
         </a>
      </div>
   );
}
