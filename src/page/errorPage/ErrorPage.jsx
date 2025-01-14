import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div>
			Error: 404 Not Found
			<Link to="/">Return to Home</Link>
		</div>
	);
}
