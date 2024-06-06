import { Dispatch, SetStateAction } from "react";

type Props = {
	text: string;
	lapTime: number;
	handleValueCurrent: Dispatch<SetStateAction<number>>;
	addLapTime: Dispatch<SetStateAction<number[]>>;
};

const ButtonLap = ({
	text,
	handleValueCurrent,
	lapTime,
	addLapTime,
}: Props) => {
	const addLap = () => {
		addLapTime(prev => [...prev, lapTime]);
		handleValueCurrent(0);
	};

	return <button onClick={addLap}>{text}</button>;
};

export { ButtonLap };
