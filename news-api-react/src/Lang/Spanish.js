import React, { useState, useEffect } from "react";
import useFetch from "../subComponents/myFetchHook";
import LangComp from "./LangComp";

function Spanish() {
   const [data, setData] = useState();

   useEffect(() => {
      fetch(`https://react-d-news.herokuapp.com/lang/spanish`)
         .then((res) => res.json())
         .then((result) => {
            setData(result.articles);
         });
   }, []);
   return <LangComp news={data} />;
}

export default Spanish;
