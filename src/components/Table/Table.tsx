import { TableElement } from "./TableElement";

type Props = {
	lapsAmount: number;
	times: string[];
};

const Table = ({ lapsAmount, times }: Props) => {
	return (
		<>
			<p>
				Okrążenie {lapsAmount} czas: {times[times.length - 1]}
			</p>

			<TableElement />
			<TableElement />
			<TableElement />
		</>
	);
};

export { Table };
