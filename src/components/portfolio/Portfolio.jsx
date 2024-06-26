import React, { useEffect, useLayoutEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./portfolio.css";
import luffy from "../../assets/luffy1.gif";
import { Data } from "../Data.js";
const Portfolio = () => {
	const [first, setfirst] = useState(Data);
	const [loading, setLoading] = useState(false);
	
	const soloProjects = first;
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Projects</h2>
			{loading ? (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					{/* <Luffy animation /> */}
					<small style={{ textAlign: "center" }}>Loading...</small>
					<img
						src={luffy}
						style={{
							width: "80px",
							height: "80px",
							marginTop: "10px",
						}}
					/>
				</Box>
			) : null}
			<div className="container portfolio__container">
				{soloProjects.map((pro,id) => (
					<article className="portfolio__item" key={id}>
						<div className="portfolio__item-image">
							<img src={pro.img} alt={pro.title} />
						</div>
						<div className="portfolio__item-content">
							<h3 className="port">{pro.title}</h3>

							<p className="port2">{pro.description}</p>

							<p style={{ color: "cyan" }}>
								<small style={{ color: " #4db5ff" }}>
									Technologies Used
								</small>
								<br></br>
								{pro.technologies}
							</p>
						</div>
						<div className="portfolio__item-cta">
							<a
								href={pro.github}
								target="_blank"
								className="btn"
								rel="noreferrer"
							>
								GitHub
							</a>

							{pro.live ? (
								<a
									href={pro.link}
									target="_blank"
									className="btn btn-primary"
									rel="noreferrer"
								>
									Live View
								</a>
							) : (
								<a
									href={pro.link}
									target="_blank"
									className="btn btn-primary"
									rel="noreferrer"
								>
									Read More
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
