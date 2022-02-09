import React from "react";

export default function XlArticle(props) {
   return (
      <div className="XlArticle">
         <a href={props.link} target="_blank">
            <div className="XlImg">
               <img src={props.imgURL} alt="" srcSet="" />
            </div>
            <div className="XLheadline">{props.headline}</div>
         </a>
      </div>
   );
}
