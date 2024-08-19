import { formatTime } from "../assets/functions";

type Props = {
	times: number[];
};

const Summary = ({ times }: Props) => {
	times.sort((a, b) => a - b);

	const summaryTime = () => {
		let allTimes = 0;

		allTimes = times.reduce((prevEl, currentEl) => prevEl + currentEl, 0);

		return allTimes;
	};

	// TODO zrobić wszystko w głównym komponencie zamienić na milisecundy i pracować na milisec.
	const averageTime = () => {
		const fullTime = summaryTime();

		return Math.round(fullTime / times.length);
	};

	return (
		<>
			<div>
				<p>czas łączny: {formatTime(summaryTime())}</p>
				<p>średni czas okrążenia: {formatTime(averageTime()) || 0}</p>
				<p>najszybszy czas okrążenia: {formatTime(times[0]) || 0}</p>
				<p>
					najwolniejszy czas okrążenia:{" "}
					{formatTime(times[times.length - 1]) || 0}
				</p>
				<p>Liczba okrążeń: {times.length}</p>
				<div>
					{times.map((time, i) => (
						<p key={i}>{formatTime(time)}</p>
					))}
				</div>
			</div>
		</>
	);
};

export { Summary };
