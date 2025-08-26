import { ClassAttributes, forwardRef, InputHTMLAttributes, Ref } from "react";
import { JSX } from "react/jsx-runtime";

type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement>; // all native input props

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
	({ className }, inputRef) => {
		return (
			<div>
				<input
					ref={inputRef}
					className={className} // <-- ref is passed here
				/>
			</div>
		);
	}
);

export default CustomInput;
