import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
	return (
		<div>
			<div className="title">
				<h2>Our Tours</h2>
				<div className="underline"></div>
			</div>
			<ul>
				{props.tours.map((tour) => {
					const { id } = tour;
					return (
						<li key={id}>
							<Tour
								key={id}
								{...tour}
								removeTour={props.removeTour}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Tours;
