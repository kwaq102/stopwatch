import { Dispatch, SetStateAction } from "react";

type Props = {
	text: string;
	handleValueMain: Dispatch<SetStateAction<boolean>>;
	handleValueCurrent: Dispatch<SetStateAction<boolean>>;
};

const ButtonReset = ({ text, handleValueMain, handleValueCurrent }: Props) => {
	const resetValue = () => {
		handleValueMain(prev => !prev);
		handleValueCurrent(prev => !prev);
	};
	return <button onClick={resetValue}>{text}</button>;
};

export { ButtonReset };
