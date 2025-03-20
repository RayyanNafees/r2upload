function Progress({ title = "Loading", progress = 0.5 }) {
	return (
		<div>
			<span id="ProgressLabel" className="sr-only">
				{title}
			</span>

			<span
				aria-labelledby="ProgressLabel"
				aria-valuenow={progress * 100}
				className="block rounded-full bg-gray-200"
			>
				<span
					className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
					style={{ width: `${progress * 100}%` }}
				>
					<span className="font-bold text-white">{progress * 100}% </span>
				</span>
			</span>
		</div>
	);
}

export default Progress;
