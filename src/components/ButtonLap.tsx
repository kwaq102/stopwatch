import { Dispatch, SetStateAction } from "react";

type Props = {
	text: string;
	lapTime: string;
	handleLapsAmount: Dispatch<SetStateAction<number>>;
	handleValueCurrent: Dispatch<SetStateAction<boolean>>;
	addLapTime: Dispatch<SetStateAction<string[]>>;
};

const ButtonLap = ({
	text,
	handleLapsAmount,
	handleValueCurrent,
	lapTime,
	addLapTime,
}: Props) => {
	const addLap = () => {
		console.log(lapTime);
		addLapTime(prev => [...prev, lapTime]);
		handleLapsAmount(prev => prev + 1);
		handleValueCurrent(prev => !prev);
	};

	return <button onClick={addLap}>{text}</button>;
};

export { ButtonLap };
