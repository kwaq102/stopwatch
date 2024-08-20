import { Dispatch, SetStateAction } from "react";

type Props = {
	text: string;
	handleValueMain: Dispatch<SetStateAction<number>>;
	handleValueCurrent: Dispatch<SetStateAction<number>>;
};

const ButtonReset = ({ text, handleValueMain, handleValueCurrent }: Props) => {
	const resetValue = () => {
		handleValueMain(0);
		handleValueCurrent(0);
	};
	return (
		<button className="btn reset" onClick={resetValue}>
			{text}
		</button>
	);
};

export { ButtonReset };
