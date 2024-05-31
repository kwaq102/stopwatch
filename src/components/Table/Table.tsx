import { TableElement } from "./TableElement";

type Props = {
	times: string[];
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
					<TableElement key={i} lapsAmount={i + 1} time={el} />
				))}
			</tbody>
		</table>
	);
};

export { Table };
