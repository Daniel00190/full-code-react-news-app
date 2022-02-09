import { useState, useEffect } from "react";

const useFetch = (url) => {
   const [data, setData] = useState();

   useEffect(() => {
      const fetchData = () => {
         fetch(`https://react-d-news.herokuapp.com/${url}`)
            .then((res) => res.json())
            .then((result) => {
               setData(result.articles);
            });
      };
      fetchData();
   }, []);

   return { data };
};
export default useFetch;
