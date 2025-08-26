export const withBorder = (WrappedComponent) => {
	return (props) => {
		<div>
			<WrappedComponent></WrappedComponent>
		</div>;
	};
};
