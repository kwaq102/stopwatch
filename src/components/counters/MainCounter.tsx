import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { formatTime } from "../../assets/functions";

type Props = {
	startMainCounter: boolean;
	handleFullTime: Dispatch<SetStateAction<string>>;
	globalMiliSec: number;
	handleGlobalMilisec: Dispatch<SetStateAction<number>>;
};

const MainCounter = ({
	startMainCounter,
	globalMiliSec,
	handleGlobalMilisec,
}: Props) => {
	const [milliseconds, setMilliseconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			handleStopwatch();
		}, 10);

		return () => clearInterval(interval);
	}, [startMainCounter, milliseconds]);

	useEffect(() => {
		setMilliseconds(0);
	}, []);

	const handleStopwatch = () => {
		if (!startMainCounter) return;
		handleGlobalMilisec(prev => prev + 10);
	};

	return (
		<>
			<h2 className="totalTimeHeading">Total time:</h2>
			<div className="totalTime">{formatTime(globalMiliSec)}</div>
		</>
	);
};

export { MainCounter };
