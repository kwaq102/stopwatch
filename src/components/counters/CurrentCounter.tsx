import { Dispatch, SetStateAction, useEffect } from "react";
import { formatTime } from "../../assets/functions";
type Props = {
	startCurrentCounter: boolean;

	currentMilisec: number;
	handleCurrentMilisec: Dispatch<SetStateAction<number>>;
};

// TODO ZROBIĆ WŁASNY HOOK LICZNIKA I GO UŻYĆ (TAK JAK NP. W LEKCJI 60 O WŁASNYCH HOOKACH)

const CurrentCounter = ({
	startCurrentCounter,

	currentMilisec,
	handleCurrentMilisec,
}: Props) => {
	useEffect(() => {
		const interval = setInterval(() => {
			handleStopwatch();
		}, 10);

		return () => clearInterval(interval);
	}, [startCurrentCounter]);

	const handleStopwatch = () => {
		if (!startCurrentCounter) return;

		handleCurrentMilisec(prev => prev + 10);
	};

	return (
		<>
			<h2>Current time:</h2>
			<p>{formatTime(currentMilisec)}</p>
		</>
	);
};

export { CurrentCounter };
