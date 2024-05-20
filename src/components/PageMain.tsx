import { useState } from "react";
import { Summary } from "./Summary";
import { Table } from "./Table/Table";
import { CurrentCounter } from "./counters/CurrentCounter";
import { MainCounter } from "./counters/MainCounter";
import { Button } from "./Button";
import { ButtonReset } from "./ButtonReset";

const PageMain = () => {
	const [startAll, setStartAll] = useState(false);
	const [startMainCounter, setStartMainCounter] = useState(false);
	const [startCurrentCounter, setStartCurrentCounter] = useState(false);

	const [startValue, setStartValue] = useState(0);
	const [changeValue, setChangeValue] = useState(false);

	return (
		<div>
			<h1>Strona główna</h1>
			<main>
				<MainCounter
					startMainCounter={startAll}
					startValue={startValue}
					changeValue={changeValue}
				/>
				<CurrentCounter
					startCurrentCounter={startAll}
					startValue={startValue}
					changeValue={changeValue}
				/>
				<Button text="Start" handleButton={setStartAll} />
				<ButtonReset text="Reset" handleValue={setChangeValue} />

				<Table />
				<Summary />
			</main>
		</div>
	);
};

export { PageMain };
