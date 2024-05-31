type Props = {
	lapsAmount: number;
	time: string;
};

const TableElement = ({ lapsAmount, time }: Props) => {
	return (
		<tr>
			<th>{lapsAmount}</th>
			<td>
				time: <strong>{time}</strong>
			</td>
		</tr>
	);
};

export { TableElement };
