import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
	const [read, setRead] = useState(false);

	return (
		<div className="single-tour">
			<h1>{name}</h1>
			<div className="tour-price">$ {price}</div>
			<div className="tour-info">
				<h4>
					{read ? info : `${info.substring(0, 200)}...`}
					<button onClick={() => setRead(!read)}>
						{read ? "show less" : "read more"}
					</button>
				</h4>
			</div>
			<img src={image} alt="" />
			<button className="delete-btn" onClick={() => removeTour(id)}>
				NOT INTERESTED
			</button>
		</div>
	);
};

export default Tour;
