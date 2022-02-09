import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function NavBarLinksLang() {
   return (
      <div className="dropdown">
         <div className="dropbtn">
            Lan
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
            <Link to="/">
               <p>English</p>
            </Link>
            <Link to="/lang/spanish">
               <p>Spanish</p>
            </Link>
            <Link to="/lang/russian">
               <p>Russian</p>
            </Link>
            <Link to="/lang/german">
               <p>German</p>
            </Link>
            <Link to="/lang/arabic">
               <p>Arabic</p>
            </Link>
            <Link to="/lang/italian">
               <p>Italian</p>
            </Link>
         </div>
      </div>
   );
}
