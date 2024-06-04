type Props = {
	times: string[];
	fullTime: string;
};
const Summary = ({ times, fullTime }: Props) => {
	const sortTimes = (arr: string[]) => {
		return arr.sort((a, b) => {
			if (a < b) {
				return -1;
			} else if (a > b) {
				return 1;
			} else {
				return 0;
			}
		});
	};

	sortTimes(times);

	function formatTime(ms: number) {
		// Oblicz godziny, minuty, sekundy i milisekundy
		const minutes = Math.floor((ms % 3600000) / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		const milliseconds = ms % 1000;

		// Sformatuj wyniki z dodaniem wiodących zer, jeśli potrzeba
		const formattedMinutes = String(minutes).padStart(2, "0");
		const formattedSeconds = String(seconds).padStart(2, "0");
		const formattedMilliseconds = String(milliseconds).padStart(2, "0");

		// Złóż wszystko w jeden string
		return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
	}

	// TODO poprawić średni czas okrązenie, a najlepiej wszystko w głównym komponencie zamienić na milisecundy i pracować na milisec.
	const averageTime = () => {
		let milisec = 0;
		console.log(
			fullTime.split(":").forEach((el, i) => {
				if (i === 0) {
					milisec = milisec + Number(el) * 60000;
				} else if (i === 1) {
					milisec = milisec + Number(el) * 1000;
				} else if (i === 2) {
					milisec = milisec + Number(el);
				}
				console.log(milisec);
				console.log(formatTime(milisec));
			})
		);

		return formatTime(milisec / times.length);
	};

	console.log(times);

	return (
		<>
			<div>
				<p>czas łączny: {fullTime}</p>
				<p>średni czas okrążenia: {averageTime()}</p>
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
