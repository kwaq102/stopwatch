import { useState } from "react";
import { Summary } from "./Summary";
import { Table } from "./Table/Table";
import { CurrentEncirclement } from "./counters/CurrentEncirclement";
import { MainCounter } from "./counters/MainCounter";
import { Button } from "./Button";

const PageMain = () => {
	const [startMainCounter, setStartMainCounter] = useState(false);

	return (
		<div>
			<h1>Strona główna</h1>
			<main>
				<MainCounter startMainCounter={startMainCounter} />
				<CurrentEncirclement />
				<Button text="Start" handleButton={setStartMainCounter} />
				<Table />
				<Summary />
			</main>
		</div>
	);
};

export { PageMain };
