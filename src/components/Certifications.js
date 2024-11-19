import React from 'react';
import "../styles/Certifications.css"
import { LiaCertificateSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const Certifications = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="certifications" id='certifications'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I have recieved</p>
                    <p className='heading-text'>Certifications</p>
                </motion.div>
                <motion.div className="certifications-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="certifications-card">
                        <LiaCertificateSolid className='certifications-icon' />
                        <p className='certifications-title'>Advanced Digital Forensic Analysis: iOS & Android</p>
                        <p className='certifications-desc'>NW3C, U.S. Department of Justice</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Certifications;
