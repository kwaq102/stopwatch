import { useState } from "react";
import { Summary } from "./Summary";
import { Table } from "./Table/Table";
import { CurrentCounter } from "./counters/CurrentCounter";
import { MainCounter } from "./counters/MainCounter";
import { Button } from "./Button";
import { ButtonReset } from "./ButtonReset";
import { ButtonLap } from "./ButtonLap";

const PageMain = () => {
	const [startAll, setStartAll] = useState(false);
	const [startMainCounter, setStartMainCounter] = useState(false);
	const [startCurrentCounter, setStartCurrentCounter] = useState(false);

	const [startValue, setStartValue] = useState(0);
	// const [changeValue, setChangeValue] = useState(false);

	// const [lapsAmount, setLapsAmount] = useState(0);

	const [minutes, setMinutes] = useState(startValue);
	const [seconds, setSeconds] = useState(startValue);
	const [milliseconds, setMilliseconds] = useState(startValue);

	const lapTime = `
	${minutes > 9 ? minutes : `0${minutes}`} : ${
		seconds > 9 ? seconds : `0${seconds}`
	} : ${milliseconds > 9 ? milliseconds : `0${milliseconds}`}`;
	const [times, setTimes] = useState<string[]>([]);

	return (
		<div>
			<h1>Strona główna</h1>
			<main>
				<MainCounter
					startMainCounter={startAll}
					startValue={startValue}
					changeValue={startMainCounter}
				/>
				<CurrentCounter
					startCurrentCounter={startAll}
					startValue={startValue}
					changeValue={startCurrentCounter}
					minutes={minutes}
					seconds={seconds}
					milliseconds={milliseconds}
					handleMinutes={setMinutes}
					handleSeconds={setSeconds}
					handleMilliseconds={setMilliseconds}
				/>
				<Button text="Start" handleButton={setStartAll} />
				<ButtonReset
					text="Reset"
					handleValueMain={setStartMainCounter}
					handleValueCurrent={setStartCurrentCounter}
				/>

				<ButtonLap
					text="Lap"
					handleValueCurrent={setStartCurrentCounter}
					lapTime={lapTime}
					addLapTime={setTimes}
				/>

				<Table times={times} />
				<Summary />
			</main>
		</div>
	);
};

export { PageMain };
