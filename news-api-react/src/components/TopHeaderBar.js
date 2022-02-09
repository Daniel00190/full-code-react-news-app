import React from "react";
import Date from "./Date";
import Temp from "./Temp";

function TopHeaderBar() {
   return (
      <div className="top-header-bar">
         <h1 className="logo">
            <a href="index.js">Daniel's Fetch</a>
         </h1>

         <Date />

         <Temp />
      </div>
   );
}

export default TopHeaderBar;
