const Todo = (props) => {
	const { isDone, task } = props;
	return (
		<div>
			<li>Task</li>
			{isDone && <h1>Task Done</h1>}
		</div>
	);
};

export default Todo;
