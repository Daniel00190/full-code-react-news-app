import React from "react";

import NavBarLinksLang from "./NavBarLinksLang";
import NavBarLinksTopics from "./NavBarLinksTopics";
import Temp from "./Temp";
import Date from "./Date";
import NavBarLinksSources from "./NavBarLinksSources";
import { BrowserRouter as Link } from "react-router-dom";

function NavigationBar() {
   return (
      <div className="navbar">
         <ul className="navUl">
            {/* <Temp /> */}
            <h1 className="logo">
               <a href="/">
                  <p>D|News</p>
               </a>
            </h1>
            <NavBarLinksTopics />
            <NavBarLinksSources />
            <NavBarLinksLang />
         </ul>
         <Date />
      </div>
   );
}

export default NavigationBar;
