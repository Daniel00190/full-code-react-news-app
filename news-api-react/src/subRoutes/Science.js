import React, { useState, useEffect } from "react";

import useFetch from "../subComponents/myFetchHook";
import ComPage from "./comPage";

export default function Science() {
   const [data, setData] = useState();

   useEffect(() => {
      fetch(`https://react-d-news.herokuapp.com/topics/science`)
         .then((res) => res.json())
         .then((result) => {
            setData(result.articles);
         });
   }, []);

   return <ComPage news={data} />;
}
