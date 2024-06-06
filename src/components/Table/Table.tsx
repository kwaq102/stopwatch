import { formatTime } from "../../assets/functions";
import { TableElement } from "./TableElement";

type Props = {
	times: number[];
};

const Table = ({ times }: Props) => {
	return (
		<table>
			<thead>
				<tr>
					<th scope="col">Laps</th>
					<th scope="col">Times</th>
				</tr>
			</thead>
			<tbody>
				{...times.map((el, i) => (
					<TableElement key={i} lapsAmount={i + 1} time={formatTime(el)} />
				))}
			</tbody>
		</table>
	);
};

export { Table };
