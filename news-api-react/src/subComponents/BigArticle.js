import React from "react";

function BigArticle(props) {
   return (
      <div className="big-article">
         <a href={props.url} target="_blank">
            <div className="big-headline">{props.headline}</div>
            <div className="content">
               <div className="article-img">
                  <img src={props.imgURL} alt="" srcSet="" />
               </div>
               <div className="description">
                  <div className="authorTime">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="auto"
                        fill="currentColor"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 18"
                     >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                           fill-rule="evenodd"
                           d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                     </svg>{" "}
                     {props.author} | {props.time.slice(0, 10)}
                  </div>
                  {props.description.slice(0, 200) + "..."}
               </div>
            </div>
         </a>
      </div>
   );
}

export default BigArticle;
