import React, { PureComponent } from "react";
import KanbanList from "./KanbanList";
import { connect } from "react-redux";
import KanbanCreate from "./KanbanCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Routes from "../routes";
import { sort } from "../actions";

class App extends PureComponent {
	render() {
		return <Routes />;
	}
}

export default App;
