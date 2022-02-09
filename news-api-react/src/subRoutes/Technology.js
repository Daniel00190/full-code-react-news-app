import React, { useState, useEffect } from "react";
import useFetch from "../subComponents/myFetchHook";
import ComPage from "./comPage";

export default function Technology() {
   const [data, setData] = useState();

   useEffect(() => {
      fetch(`https://react-d-news.herokuapp.com/topics/technology`)
         .then((res) => res.json())
         .then((result) => {
            setData(result.articles);
         });
   }, []);

   return <ComPage news={data} />;
}
