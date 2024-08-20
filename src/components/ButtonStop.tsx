type Props = {
	hide: () => void;
};

const ButtonStop = ({ hide }: Props) => {
	return (
		<button className="btn stop" onClick={hide}>
			STOP
		</button>
	);
};

export { ButtonStop };
