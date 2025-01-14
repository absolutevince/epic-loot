export default function ScrollableFile({ data }) {
	return (
		<>
			{data.map((d, index) => (
				<div key={index}></div>
			))}
		</>
	);
}
