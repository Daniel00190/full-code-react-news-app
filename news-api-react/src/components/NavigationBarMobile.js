import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavigationBarMobile() {
   const [menu, setMenu] = useState(false);
   const [topics, setTopics] = useState(false);
   const [sources, setSources] = useState(false);
   const [languages, setLanguages] = useState(false);

   return (
      <div className="navBar">
         <div className="menu_container">
            <div
               className="menu hidden_for_desktop"
               onClick={() => {
                  setMenu(menu ? false : true);
               }}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
               >
                  <path
                     fillRule="evenodd"
                     d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
               </svg>
            </div>
         </div>

         {menu ? (
            <div className="links_container_mobile">
               <div className="title_mobile">
                  <Link to="/" style={{ color: "#f2e9e4" }}>
                     HOME
                  </Link>
               </div>
               <div className="links">
                  <div
                     className="topics_title title_mobile"
                     onClick={() => setTopics(topics ? false : true)}
                  >
                     Topics
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                     >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                     </svg>
                  </div>
                  {topics ? (
                     <div className="topics_dropdown_mobile">
                        <Link to="/topics/health">
                           <p>Health</p>
                        </Link>
                        <Link to="/topics/science">
                           <p>Science</p>
                        </Link>
                        <Link to="/topics/sports">
                           <p>Sports</p>
                        </Link>
                        <Link to="/topics/entertainment">
                           <p>Entertainment</p>
                        </Link>
                        <Link to="/topics/business">
                           <p>Business</p>
                        </Link>
                        <Link to="/topics/technology">
                           <p>Technology</p>
                        </Link>
                     </div>
                  ) : null}
               </div>
               <div className="links">
                  <div
                     className="sources_title title_mobile"
                     onClick={() => setSources(sources ? false : true)}
                  >
                     Sources
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                     >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                     </svg>
                  </div>
                  {sources ? (
                     <div className="sources_dropdown_mobile">
                        <Link to="/sources/cnn">
                           <p>CNN</p>
                        </Link>
                        <Link to="/sources/time">
                           <p>Time</p>
                        </Link>
                        <Link to="/sources/reuters">
                           <p>Reuters</p>
                        </Link>
                        <Link to="/sources/bbc-news">
                           <p>BBC-NEWS</p>
                        </Link>
                        <Link to="/sources/espn">
                           <p>ESPN</p>
                        </Link>
                     </div>
                  ) : null}
               </div>
               <div className="links">
                  <div
                     class="languages_title title_mobile"
                     onClick={() => setLanguages(languages ? false : true)}
                  >
                     Languages
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                     >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                     </svg>
                  </div>
                  {languages ? (
                     <div className="languages_dropdown_mobile">
                        <Link to="/">
                           <p>English</p>
                        </Link>
                        <Link to="/lang/spanish">
                           <p>Spanish</p>
                        </Link>
                        <Link to="/lang/russian">
                           <p>Russian</p>
                        </Link>
                        <Link to="/lang/german">
                           <p>German</p>
                        </Link>
                        <Link to="/lang/arabic">
                           <p>Arabic</p>
                        </Link>
                        <Link to="/lang/italian">
                           <p>Italian</p>
                        </Link>
                     </div>
                  ) : null}
               </div>
            </div>
         ) : null}
      </div>
   );
}
