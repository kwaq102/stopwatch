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

	const averageTime = () => {
		const fullTime = summaryTime();
		return Math.round(fullTime / times.length);
	};

	return (
		<>
			<div>
				<p>Total time: {formatTime(summaryTime())}</p>
				<p>Average time lap: {formatTime(averageTime())}</p>
				<p>The fastest time lap: {formatTime(times[0])}</p>
				<p>The slowest time lap: {formatTime(times[times.length - 1])}</p>
				<p>Number of laps: {times.length}</p>
				<div>
					{times.map((time, i) => (
						<p key={i}>{formatTime(time)}</p>
					))}
				</div>
				<button
					onClick={() => {
						window.location.reload();
					}}
				>
					Refresh
				</button>
			</div>
		</>
	);
};

export { Summary };
