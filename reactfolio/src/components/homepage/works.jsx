import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={"https://saviynt.com/hubfs/celonis.png"}
								alt="celonis"
								className="work-image"
							/>
							<div className="work-title">Celonis SE</div>
							<div className="work-subtitle">
								Services Consultant
							</div>
							<div className="work-duration">September 2024 - March 2025</div>
						</div>

						<div className="work">
							<img
								src={'https://www.brandslex.de/img/logos/xl/v/logo-vorwerk-01.png'}
								alt="akf-bank"
								className="work-image"
							/>
							<div className="work-title">AKF BANK; Vorwerk Group</div>
							<div className="work-subtitle">
								Software Architect
							</div>
							<div className="work-duration">June 2021 - September 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
