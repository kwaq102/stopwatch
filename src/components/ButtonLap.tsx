import { Dispatch, SetStateAction } from "react";

type Props = {
	text: string;
	lapTime: string;
	handleValueCurrent: Dispatch<SetStateAction<boolean>>;
	addLapTime: Dispatch<SetStateAction<string[]>>;
};

const ButtonLap = ({
	text,
	handleValueCurrent,
	lapTime,
	addLapTime,
}: Props) => {
	const addLap = () => {
		addLapTime(prev => [...prev, lapTime]);
		handleValueCurrent(prev => !prev);
	};

	return <button onClick={addLap}>{text}</button>;
};

export { ButtonLap };
