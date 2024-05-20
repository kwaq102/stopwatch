import { Dispatch, SetStateAction } from "react";

type Props = {
	text: string;
	handleValue: Dispatch<SetStateAction<boolean>>;
};

const ButtonReset = ({ text, handleValue }: Props) => {
	const resetValue = () => {
		console.log("jestem w resecie");

		handleValue(prev => !prev);
	};
	return <button onClick={resetValue}>{text}</button>;
};

export { ButtonReset };
