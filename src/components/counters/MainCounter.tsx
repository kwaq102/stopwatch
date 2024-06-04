import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
	startMainCounter: boolean;
	startValue: number;
	changeValue: boolean;
	handleFullTime: Dispatch<SetStateAction<string>>;
};

const MainCounter = ({
	startMainCounter,
	startValue,
	changeValue,
	handleFullTime,
}: Props) => {
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

	const fullTime = `${minutes > 9 ? minutes : `0${minutes}`} : ${
		seconds > 9 ? seconds : `0${seconds}`
	} : ${milliseconds > 9 ? milliseconds : `0${milliseconds}`}`;

	handleFullTime(fullTime);

	return (
		<>
			<h1>Total time:</h1>
			<div>
				{fullTime}
				{/* {minutes > 9 ? minutes : `0${minutes}`}:
				{seconds > 9 ? seconds : `0${seconds}`}:
				{milliseconds > 9 ? milliseconds : `0${milliseconds}`} */}
			</div>
		</>
	);
};

export { MainCounter };
