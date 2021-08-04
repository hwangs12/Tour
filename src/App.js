import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./index.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const unremovedTours = tours.filter((tour) => {
			return tour.id !== id;
		});
		setTours(unremovedTours);
	};

	const getTour = async () => {
		setIsLoading(true);
		try {
			const getUrl = await fetch(url);
			const getData = await getUrl.json();
			setIsLoading(false);
			setTours(getData);
		} catch (e) {
			setIsLoading(false);
			console.log(e);
		}
	};

	useEffect(() => {
		getTour();
	}, []);

	return (
		<main>
			{isLoading ? (
				<Loading />
			) : (
				<Tours tours={tours} removeTour={removeTour} />
			)}
		</main>
	);
}

export default App;
