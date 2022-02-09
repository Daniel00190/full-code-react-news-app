import React from "react";
import { Switch, Route, useRouteMatch } from "react-router";
import Arabic from "../Lang/Arabic";
import Spanish from "../Lang/Spanish";
import Russian from "../Lang/Russian";
import Italian from "../Lang/Italian";
import German from "../Lang/German";

function SourcesPage() {
   let { path, url } = useRouteMatch();
   return (
      <Switch>
         <Route exact path={`${path}/Arabic`}>
            <Arabic />
         </Route>
         <Route exact path={`${path}/spanish`}>
            <Spanish />
         </Route>
         <Route exact path={`${path}/russian`}>
            <Russian />
         </Route>
         <Route exact path={`${path}/italian`}>
            <Italian />
         </Route>
         <Route exact path={`${path}/german`}>
            <German />
         </Route>
      </Switch>
   );
}

export default SourcesPage;
