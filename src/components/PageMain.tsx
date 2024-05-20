import { useState } from "react";
import { Summary } from "./Summary";
import { Table } from "./Table/Table";
import { CurrentCounter } from "./counters/CurrentCounter";
import { MainCounter } from "./counters/MainCounter";
import { Button } from "./Button";

const PageMain = () => {
	const [startMainCounter, setStartMainCounter] = useState(false);
	const [startCurrentCounter, setStartCurrentCounter] = useState(false);

	return (
		<div>
			<h1>Strona główna</h1>
			<main>
				<MainCounter startMainCounter={startMainCounter} />
				<CurrentCounter startCurrentCounter={startCurrentCounter} />
				<Button
					text={startMainCounter ? "Stop" : "Start"}
					handleButton={setStartMainCounter}
				/>
				<Button
					text="Start Current Counter"
					handleButton={setStartCurrentCounter}
				/>
				<Table />
				<Summary />
			</main>
		</div>
	);
};

export { PageMain };
