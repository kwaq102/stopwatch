type Props = {
	hide: () => void;
};

const ButtonStop = ({ hide }: Props) => {
	return <button onClick={hide}>STOP</button>;
};

export { ButtonStop };
