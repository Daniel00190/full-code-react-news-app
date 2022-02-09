import React from "react";
import { Router, Switch, Route, useRouteMatch } from "react-router";
import Health from "../subRoutes/Health";
import Science from "../subRoutes/Science";
import Sports from "../subRoutes/Sports";
import Entertainment from "../subRoutes/Entertainment";
import Business from "../subRoutes/Business.js";
import Technology from "../subRoutes/Technology";

function TopicsPage(props) {
   let { path, url } = useRouteMatch();

   return (
      <Switch>
         <Route exact path={`${path}/health`}>
            <Health />
         </Route>
         <Route exact path={`${path}/science`}>
            <Science />
         </Route>
         <Route exact path={`${path}/sports`}>
            <Sports />
         </Route>
         <Route exact path={`${path}/entertainment`}>
            <Entertainment />
         </Route>
         <Route exact path={`${path}/business`}>
            <Business />
         </Route>
         <Route exact path={`${path}/technology`}>
            <Technology />
         </Route>
      </Switch>
   );
}

export default TopicsPage;
