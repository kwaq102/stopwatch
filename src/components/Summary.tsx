import { formatTime, sortTimes } from "../assets/functions";

type Props = {
	times: string[];
};

const Summary = ({ times }: Props) => {
	sortTimes(times);

	const summaryTime = () => {
		let allTime = 0;

		times.map(el => {
			el.split(":").forEach((el, i) => {
				if (i === 0) {
					allTime = allTime + Number(el) * 60000;
				} else if (i === 1) {
					allTime = allTime + Number(el) * 1000;
				} else if (i === 2) {
					allTime = allTime + Number(el) * 10;
				}
			});
		});

		return allTime;
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
				<p>średni czas okrążenia: {formatTime(averageTime())}</p>
				<p>najszybszy czas okrążenia: {times[0]}</p>
				<p>najwolniejszy czas okrążenia: {times[times.length - 1]}</p>
				<p>Liczba okrążeń: {times.length}</p>
				<div>
					{times.map((time, i) => (
						<p key={i}>{time}</p>
					))}
				</div>
			</div>
		</>
	);
};

export { Summary };
