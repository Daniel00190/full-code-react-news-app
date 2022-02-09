import React, { useState, useEffect } from "react";
import ComPage from "../subRoutes/comPage";

import useFetch from "../subComponents/myFetchHook";

export default function Espn() {
   const [data, setData] = useState();

   useEffect(() => {
      fetch(`https://react-d-news.herokuapp.com/sources/espn`)
         .then((res) => res.json())
         .then((result) => {
            setData(result.articles);
         });
   }, []);

   return <ComPage news={data} />;
}
