import { Summary } from "./Summary";
import { Table } from "./Table/Table";
import { CurrentEncirclement } from "./counters/CurrentEncirclement";
import { MainCounter } from "./counters/MainCounter";

const PageMain = () => {
	return (
		<div>
			<h1>Strona główna</h1>
			<main>
				<MainCounter />
				<CurrentEncirclement />
				<Table />
				<Summary />
			</main>
		</div>
	);
};

export { PageMain };
