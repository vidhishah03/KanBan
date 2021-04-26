import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import KanbanBoard from "../components/KanbanBoard";
import Home from "../components/Home";

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/:boardID" component={KanbanBoard} />
			</div>
		</Router>
	);
};

export default AppRouter;
