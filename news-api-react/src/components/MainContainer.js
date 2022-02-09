import React from "react";

import LeftSideNews from "./LeftSideNews";
import RigthSection from "./RigthSection";
import FirstSectionNews from "./FirstSectionNews";

function MainContainer() {
   return (
      <div className="main-container">
         <LeftSideNews />
         <RigthSection />
         <FirstSectionNews />
      </div>
   );
}

export default MainContainer;
