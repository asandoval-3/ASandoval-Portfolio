import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_pic.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>I am an innovative IT professional with a background in managing Microsoft Admin Centers, including Security, Exchange, and Active Directory. My passion for technology drives me to quickly learn and implement new tools, enabling improved user support and operational efficiency. </p>
                        <br />
                        <p>In my career, I’ve successfully reduced help desk response times by 50% through strategic ticket management and proactive problem-solving. I am skilled in configuring and deploying hardware to ensure seamless integration and exceptional user experiences.</p>
                        <br />
                        <p>Leveraging remote support tools like Microsoft Intune and ScreenConnect, I deliver efficient technical support, empowering teams to work effectively. I am dedicated to continuous growth and finding creative solutions to meet the evolving needs of the IT landscape.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
