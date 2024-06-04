import { useState } from "react";
import { Summary } from "./Summary";
import { Table } from "./Table/Table";
import { CurrentCounter } from "./counters/CurrentCounter";
import { MainCounter } from "./counters/MainCounter";
import { Button } from "./Button";
import { ButtonReset } from "./ButtonReset";
import { ButtonLap } from "./ButtonLap";
import { ButtonStop } from "./ButtonStop";

const PageMain = () => {
	const [startAll, setStartAll] = useState(false);
	const [startMainCounter, setStartMainCounter] = useState(false);
	const [startCurrentCounter, setStartCurrentCounter] = useState(false);

	const [startValue, setStartValue] = useState(0);
	// const [changeValue, setChangeValue] = useState(false);

	// const [lapsAmount, setLapsAmount] = useState(0);

	const [hidden, setHidden] = useState(false);

	const [minutes, setMinutes] = useState(startValue);
	const [seconds, setSeconds] = useState(startValue);
	const [milliseconds, setMilliseconds] = useState(startValue);

	const [fullTime, setFullTime] = useState("");

	const [times, setTimes] = useState<string[]>([]);

	const lapTime = `${minutes > 9 ? minutes : `0${minutes}`} : ${
		seconds > 9 ? seconds : `0${seconds}`
	} : ${milliseconds > 9 ? milliseconds : `0${milliseconds}`}`;

	const hide = () => {
		setHidden(true);
		setStartAll(false);
	};

	return (
		<div>
			<div>TEST {fullTime}</div>
			<h1>Strona główna</h1>
			<main>
				{!hidden && (
					<MainCounter
						startMainCounter={startAll}
						startValue={startValue}
						changeValue={startMainCounter}
						handleFullTime={setFullTime}
					/>
				)}

				{!hidden && (
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
				)}
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

				<ButtonStop hide={hide} />

				{!hidden && <Table times={times} />}
				{hidden && <Summary times={times} fullTime={fullTime} />}
			</main>
		</div>
	);
};

export { PageMain };
