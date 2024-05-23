import { Dispatch, SetStateAction, useEffect } from "react";
type Props = {
	startCurrentCounter: boolean;
	startValue: number;
	changeValue: boolean;
	minutes: number;
	seconds: number;
	milliseconds: number;
	handleMinutes: Dispatch<SetStateAction<number>>;
	handleSeconds: Dispatch<SetStateAction<number>>;
	handleMilliseconds: Dispatch<SetStateAction<number>>;
};

const CurrentCounter = ({
	startCurrentCounter,
	startValue,
	changeValue,
	minutes,
	seconds,
	milliseconds,
	handleMinutes,
	handleMilliseconds,
	handleSeconds,
}: Props) => {
	useEffect(() => {
		const interval = setInterval(() => {
			handleStopwatch();
		}, 100);

		return () => clearInterval(interval);
	}, [startCurrentCounter, milliseconds, startValue]);

	useEffect(() => {
		handleMinutes(startValue);
		handleSeconds(startValue);
		handleMilliseconds(startValue);
	}, [changeValue]);

	const handleStopwatch = () => {
		if (!startCurrentCounter) return;
		if (milliseconds >= 9) {
			handleMilliseconds(0);
			if (seconds >= 59) {
				handleSeconds(0);
				handleMinutes(prev => prev + 1);
			} else {
				handleSeconds(prev => prev + 1);
			}
		} else {
			handleMilliseconds(prev => prev + 1);
		}
	};

	return (
		<>
			<h2>Current time:</h2>
			<p>
				{minutes > 9 ? minutes : `0${minutes}`}:
				{seconds > 9 ? seconds : `0${seconds}`}:
				{milliseconds > 9 ? milliseconds : `0${milliseconds}`}
			</p>
		</>
	);
};

export { CurrentCounter };
