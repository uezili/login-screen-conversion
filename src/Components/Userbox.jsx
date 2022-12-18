export function UserBox(props) {
	return (
		<div className="user-box">
			<input type={props.type} name="" required="" />
			<label>{props.label}</label>
		</div>
	);
}

