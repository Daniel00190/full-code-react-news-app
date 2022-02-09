import React, { useState } from "react";
import { BrowserRouter, Link, Route, Router } from "react-router-dom";

export default function NavBarLinksTopics(props) {
   return (
      <div className="dropdown">
         <div className="dropbtn">
            Topics
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               fill="currentColor"
               class="bi bi-caret-down-fill"
               viewBox="0 0 16 16"
            >
               <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
         </div>

         <div className="dropdown-content">
            <Link to="/topics/health">
               <p>Health</p>
            </Link>
            <Link to="/topics/science">
               <p>Science</p>
            </Link>
            <Link to="/topics/sports">
               <p>Sports</p>
            </Link>
            <Link to="/topics/entertainment">
               <p>Entertainment</p>
            </Link>
            <Link to="/topics/business">
               <p>Business</p>
            </Link>
            <Link to="/topics/technology">
               <p>Technology</p>
            </Link>
         </div>
      </div>
   );
}
