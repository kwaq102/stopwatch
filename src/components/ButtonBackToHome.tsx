const ButtonBackToHome = () => {
	return (
		<button
			className="btn refresh"
			onClick={() => {
				window.location.reload();
			}}
		>
			Refresh
		</button>
	);
};

export { ButtonBackToHome };
