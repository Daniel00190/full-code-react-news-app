import React from "react";

export default function Topics(props) {
   return (
      <li>
         <a href="#">
            {" "}
            {props.name}{" "}
            <svg
               width="0.8em"
               height="0.8em"
               viewBox="0 0 16 16"
               className="bi bi-arrow-right-square-fill"
               fill="#90A9B7"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  fillRule="evenodd"
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm5.646 10.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"
               />
            </svg>
         </a>
      </li>
   );
}
