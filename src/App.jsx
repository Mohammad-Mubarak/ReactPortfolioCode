import React, { useLayoutEffect,useState } from "react";
import Contact from "./components/contact/Contact";
// import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Testimonials from "./components/testimonials/Testimonials";
import GitHubCalendar from "react-github-calendar";
import Tabs from "./components/Skills/Tabs";
import Git from "./components/Git status/Git"
import { lightBlue } from "@mui/material/colors";
import Theme from "./components/toggle theme/Theme"

const App = () => {

	
	return (
		<>
			<Header />
			<Topbar />
			<Intro />
			<Tabs />
		
			<Portfolio/>

			<div className="calender">
				<h2 className="got">
					GITHUB CONTRIBUTION <span className="extra got2">CALENDER</span>{" "}
				</h2>
				<p className="tit">
					Here find my github contribution over last months
				</p>
				<GitHubCalendar username="mohammad-Mubarak"    />
			</div>


			<div className='calender cent'>
			<h2>
			      GITHUB<span className="extra states" > STATISTICS</span>{" "}
				</h2>
				<p className="tit">
				My overall statistics and contribution
				</p>
			<Git/>
			</div>
			
		 <Testimonials /> 
			<Contact />
			<Footer />
		</>
	);
};

export default App;
