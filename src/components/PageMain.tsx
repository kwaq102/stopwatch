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
	const [hidden, setHidden] = useState(false);
	const [globalMilisec, setGlobalMilisec] = useState(0);
	const [currentMilisec, setCurrentMilisec] = useState(0);

	const [fullTime, setFullTime] = useState("");

	//Array with lap times by milliseconds
	const [times, setTimes] = useState<number[]>([]);

	const lapTime = currentMilisec;

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
						handleFullTime={setFullTime}
						handleGlobalMilisec={setGlobalMilisec}
						globalMiliSec={globalMilisec}
					/>
				)}

				{!hidden && (
					<CurrentCounter
						startCurrentCounter={startAll}
						handleCurrentMilisec={setCurrentMilisec}
						currentMilisec={currentMilisec}
					/>
				)}
				<Button text="Start" handleButton={setStartAll} />
				<ButtonReset
					text="Reset"
					handleValueMain={setGlobalMilisec}
					handleValueCurrent={setCurrentMilisec}
				/>

				<ButtonLap
					text="Lap"
					handleValueCurrent={setCurrentMilisec}
					lapTime={lapTime}
					addLapTime={setTimes}
					hiddenTable={hidden}
				/>

				<ButtonStop hide={hide} />

				{!hidden && <Table times={times} />}
				{hidden && <Summary times={times} />}
			</main>
		</div>
	);
};

export { PageMain };
