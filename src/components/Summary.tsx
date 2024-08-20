import { formatTime } from "../assets/functions";
import { ButtonBackToHome } from "./ButtonBackToHome";

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
			<div className="summary">
				<p>
					Total time: <span>{formatTime(summaryTime())}</span>
				</p>
				<p>
					Average time lap: <span>{formatTime(averageTime())}</span>
				</p>
				<p>
					The fastest time lap: <span>{formatTime(times[0])}</span>
				</p>
				<p>
					The slowest time lap:{" "}
					<span>{formatTime(times[times.length - 1])}</span>
				</p>
				<p className="summaryLaps">
					Number of laps: <span>{times.length}</span>
				</p>
				<div className="summaryTimes">
					{times.map((time, i) => (
						<p key={i}>
							{i + 1}: {formatTime(time)}
						</p>
					))}
				</div>
				<ButtonBackToHome />
			</div>
		</>
	);
};

export { Summary };
