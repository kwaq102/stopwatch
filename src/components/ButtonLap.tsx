import { Dispatch, SetStateAction } from "react";

type Props = {
	text: string;
	lapTime: number;
	handleValueCurrent: Dispatch<SetStateAction<number>>;
	addLapTime: Dispatch<SetStateAction<number[]>>;
	hiddenTable: boolean;
};

const ButtonLap = ({
	text,
	handleValueCurrent,
	lapTime,
	addLapTime,
	hiddenTable,
}: Props) => {
	const addLap = () => {
		if (hiddenTable) return;
		addLapTime(prev => [...prev, lapTime]);
		handleValueCurrent(0);
	};

	return <button onClick={addLap}>{text}</button>;
};

export { ButtonLap };
