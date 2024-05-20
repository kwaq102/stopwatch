import { useEffect, useState } from "react";
type Props = {
	startCurrentCounter: boolean;
	startValue: number;
	changeValue: boolean;
};

const CurrentCounter = ({
	startCurrentCounter,
	startValue,
	changeValue,
}: Props) => {
	const [minutes, setMinutes] = useState(startValue);
	const [seconds, setSeconds] = useState(startValue);
	const [milliseconds, setMilliseconds] = useState(startValue);

	useEffect(() => {
		const interval = setInterval(() => {
			handleStopwatch();
		}, 100);

		return () => clearInterval(interval);
	}, [startCurrentCounter, milliseconds, startValue]);

	useEffect(() => {
		setMinutes(startValue);
		setSeconds(startValue);
		setMilliseconds(startValue);
	}, [changeValue]);

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
