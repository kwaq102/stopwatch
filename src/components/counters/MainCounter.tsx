import { useEffect, useState } from "react";

const MainCounter = () => {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [milliseconds, setMilliseconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			handleStopwatch();
		}, 100);

		return () => clearInterval(interval);
	}, [milliseconds]);

	const handleStopwatch = () => {
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
			<h1>{milliseconds}</h1>
			<div>
				{minutes > 9 ? minutes : `0${minutes}`}:
				{seconds > 9 ? seconds : `0${seconds}`}:
				{milliseconds > 9 ? milliseconds : `0${milliseconds}`}
			</div>
		</>
	);
};

export { MainCounter };
