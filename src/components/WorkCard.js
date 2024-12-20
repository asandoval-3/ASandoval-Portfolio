import React from "react";
import { FiFolder } from "react-icons/fi";
import { FaItchIo } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WorkCard = ({ w }) => {
	return (
		<div>
			<Link to={w.site} target='_blank' className='work-link-group'>
				<div className='works-card'>
					<div className='works-container'>
						<div className='top-work'>
							<FiFolder className='work-folder' />
							<div className='right'>
								{w.gitlink && (
									<Link className='work-git' to={w.gitlink} target='_blank'>
										<FaItchIo />
									</Link>
								)}
								<Link className='work-link' to={w.site} target='_blank'>
									<IoOpenOutline />
								</Link>
							</div>
						</div>
						<div className='mid-work'>
							<p className='work-title'>{w.title}</p>
							<p className='work-desc'>{w.desc}</p>
						</div>
						<div className='bottom-work'>
							{w.tech.map((e, index) => {
								return <small key={index}>{e}</small>;
							})}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default WorkCard;
