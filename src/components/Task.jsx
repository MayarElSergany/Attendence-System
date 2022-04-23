// import { Component } from "react";
// import axios from "axios";

// class Task extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			task: null,
// 		};
// 	}

// 	componentDidMount() {
// 		axios.get("https://jsonplaceholder.typicode.com/todos/3").then((response) => {
// 			this.setState({ task: response.data });
// 		});
// 	}

// 	shouldComponentUpdate() {
// 		if (this.state.task && this.state.task.completed) return false;
// 		return true;
// 	}

// 	render() {

// 		if (!this.state.task) return <div>Loading.........</div>;

// 		const { title: name, completed: isDone } = this.state.task;
// 		return (
// 			<div>
// 				Task: {name} {isDone ? "DONE" : "In Progress"}
// 				<br /><br />
// 				<button
// 					className="btn btn-primary"
// 					onClick={() => {
// 						this.setState((oldState) => ({
// 							task: { ...oldState.task, completed: true },
// 						}));
// 					}}
// 				>
// 					Mark as Done
// 				</button>
// 			</div>
// 		);
// 	}
// }
// export default Task;
