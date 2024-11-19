import React from 'react';
import "../styles/Services.css"
import { MdGames } from "react-icons/md";
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Web Development</p>
                        <p className='services-desc'>Create simple, visually appealing, and functional website layouts that are interactive and responsive, while continuously learning and improving my skills in web design and development.</p>
                    </div>
                    <div className="services-card">
                        <MdGames className='services-icon' />
                        <p className='services-title'>Game Development</p>
                        <p className='services-desc'>Design and develop basic 2D or 3D game concepts, focusing on creating engaging gameplay mechanics, simple storylines, and interactive environments.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
