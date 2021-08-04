import React from "react";
import { Switch, Route } from "react-router-dom";

import {
	HomeComponent,
	BlogsComponent,
	CareersComponent,
	FaqComponent
} from "components";

export const Routes = (props) => (
	<Switch>
		<Route exact path="/" component={HomeComponent} />
		<Route path="/home" component={HomeComponent} />
		<Route exact path="/careers" component={CareersComponent} />
		<Route exact path="/blogs" component={BlogsComponent} />
		<Route exact path="/faq" component={FaqComponent} />
	</Switch>
);

export default Routes;
