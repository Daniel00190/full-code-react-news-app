import React from "react";
import { Switch, Route, useRouteMatch } from "react-router";
import Cnn from "../sourcesComponents/Cnn";
import Time from "../sourcesComponents/Time";
import Reuters from "../sourcesComponents/Reuters";
import BbcNews from "../sourcesComponents/BbcNews";
import Espn from "../sourcesComponents/Espn";

function SourcesPage() {
   let { path, url } = useRouteMatch();
   return (
      <Switch>
         <Route exact path={`${path}/cnn`}>
            <Cnn />
         </Route>
         <Route exact path={`${path}/time`}>
            <Time />
         </Route>
         <Route exact path={`${path}/reuters`}>
            <Reuters />
         </Route>
         <Route exact path={`${path}/bbc-news`}>
            <BbcNews />
         </Route>
         <Route exact path={`${path}/espn`}>
            <Espn />
         </Route>
      </Switch>
   );
}

export default SourcesPage;
