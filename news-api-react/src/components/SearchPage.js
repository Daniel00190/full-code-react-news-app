import React, { useState, useEffect } from "react";
import ComPage from "../subRoutes/comPage";

function SearchPage({ liftedState }) {
   const [state, setstate] = useState();

   let myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

   let urlencoded = new URLSearchParams();
   urlencoded.append("question", liftedState.input);
   urlencoded.append("language", "en");

   let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
   };

   useEffect(() => {
      fetch("/search", requestOptions)
         .then((response) => response.json())
         .then((result) => setstate(result.articles))
         .catch((error) => console.log("error", error));
   }, [liftedState.input]);

   return (
      <div>
         {liftedState.input ? (
            <ComPage news={state} />
         ) : (
            <div className="emptySpace">start searching...</div>
         )}
      </div>
   );
}
export default SearchPage;
