import React, { useState, useEffect } from "react";
import { Link, Route, Redirect } from "react-router-dom";

export default function EmptySpace({ setliftedState }) {
   const [toggle, setToggle] = useState("false");
   const [state, setstate] = useState();
   const [input, setinput] = useState();

   let handleChange = async (e) => {
      await setinput(e.target.value);
   };

   let handleSubmit = () => {
      setliftedState({ input: input });
   };

   return (
      <div>
         <div className="emptySpace">
            <form className="search" onSubmit={handleSubmit}>
               <input
                  type="text"
                  placeholder="I want to know about?"
                  onChange={handleChange}
               />

               <Link to="/search">
                  <button
                     type="submit"
                     value="submit"
                     onClick={handleSubmit}
                     className="searchButton"
                  >
                     <i className="fa fa-search">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="currentColor"
                           className="bi bi-search"
                           viewBox="0 0 16 16"
                        >
                           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                     </i>
                  </button>
               </Link>
            </form>
         </div>
      </div>
   );
}
