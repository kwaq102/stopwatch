import { Dispatch, SetStateAction } from "react";

type Props = {
	text: string;
	handleButton: Dispatch<SetStateAction<boolean>>;
};

const Button = ({ text, handleButton }: Props) => {
	const startStopCounter = () => {
		handleButton(true);
	};
	return <button onClick={startStopCounter}>{text}</button>;
};

export { Button };
