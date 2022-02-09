import React, { useState, useEffect } from "react";

import ComPage from "./comPage";

export default function Entertainment() {
   const [data, setData] = useState();

   useEffect(() => {
      fetch(`/topics/entertainment`)
         .then((res) => res.json())
         .then((result) => {
            setData(result.articles);
         });
   }, []);

   return <ComPage news={data} />;
}
