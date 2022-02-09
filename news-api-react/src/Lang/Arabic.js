import React, { useState, useEffect } from "react";
import LangComp from "./LangComp";
import useFetch from "../subComponents/myFetchHook";

export default function Arabic() {
   const [data, setData] = useState();

   useEffect(() => {
      fetch(`https://react-d-news.herokuapp.com/lang/arabic`)
         .then((res) => res.json())
         .then((result) => {
            setData(result.articles);
         });
   }, []);

   return <LangComp news={data} />;
}
