import Footer from "./components/Footer";
import React, { useState } from "react";
import EmptySpace from "./components/EmptySpace";
import SearchPage from "./components/SearchPage";
import SourcesPage from "./components/SourcesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopicsPage from "./components/TopicsPage";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import HomePage from "./components/HomePage";
import LangPage from "./components/LangPage";
import NavigationBarMobile from "./components/NavigationBarMobile";

export default function App() {
   const [liftedState, setliftedState] = useState({
      input: "",
      toggle: "false",
   });

   return (
      <Router>
         <NavigationBarMobile />
         <NavigationBar />
         <EmptySpace setliftedState={setliftedState} />

         <Switch>
            <Route exact path="/search">
               <SearchPage liftedState={liftedState} />
            </Route>

            <Route path="/topics">
               <TopicsPage />
            </Route>

            <Route path="/sources">
               <SourcesPage />
            </Route>

            <Route path="/lang">
               <LangPage />
            </Route>

            <Route exact path="/">
               <HomePage />
            </Route>
         </Switch>
         <Footer />
      </Router>
   );
}
