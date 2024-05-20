import { Dispatch, SetStateAction } from "react";

type Props = {
	text: string;
	handleButton: Dispatch<SetStateAction<boolean>>;
};

const Button = ({ text, handleButton }: Props) => {
	const startStopCounter = () => {
		handleButton(prev => !prev);
	};
	return <button onClick={startStopCounter}>{text}</button>;
};

export { Button };
