import { useEffect, useState } from "react";
type Props = {
	startCurrentCounter: boolean;
};

const CurrentCounter = ({ startCurrentCounter }: Props) => {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [milliseconds, setMilliseconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			handleStopwatch();
		}, 100);

		return () => clearInterval(interval);
	}, [startCurrentCounter, milliseconds]);

	const handleStopwatch = () => {
		if (!startCurrentCounter) return;
		if (milliseconds >= 9) {
			setMilliseconds(0);
			if (seconds >= 59) {
				setSeconds(0);
				setMinutes(prev => prev + 1);
			} else {
				setSeconds(prev => prev + 1);
			}
		} else {
			setMilliseconds(prev => prev + 1);
		}
	};

	return (
		<>
			<h2>Current time:</h2>
			<div>
				{minutes > 9 ? minutes : `0${minutes}`}:
				{seconds > 9 ? seconds : `0${seconds}`}:
				{milliseconds > 9 ? milliseconds : `0${milliseconds}`}
			</div>
		</>
	);
};

export { CurrentCounter };
