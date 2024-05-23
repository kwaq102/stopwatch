import { useEffect, useState } from "react";

type Props = {
	startMainCounter: boolean;
	startValue: number;
	changeValue: boolean;
};

const MainCounter = ({ startMainCounter, startValue, changeValue }: Props) => {
	const [minutes, setMinutes] = useState(startValue);
	const [seconds, setSeconds] = useState(startValue);
	const [milliseconds, setMilliseconds] = useState(startValue);

	useEffect(() => {
		const interval = setInterval(() => {
			handleStopwatch();
		}, 100);

		return () => clearInterval(interval);
	}, [startMainCounter, milliseconds, startValue]);

	useEffect(() => {
		setMinutes(startValue);
		setSeconds(startValue);
		setMilliseconds(startValue);
	}, [changeValue]);

	//TODO to można spróbować to jednej funkcji to samo jest w CurrentCounter
	const handleStopwatch = () => {
		if (!startMainCounter) return;
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
			<h1>Total time:</h1>
			<div>
				{minutes > 9 ? minutes : `0${minutes}`}:
				{seconds > 9 ? seconds : `0${seconds}`}:
				{milliseconds > 9 ? milliseconds : `0${milliseconds}`}
			</div>
		</>
	);
};

export { MainCounter };
