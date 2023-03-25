import React from 'react';
//for the animation cards
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constant';
import { fadeIn, textVariant } from '../utils/motion';
import Tilt from 'react-tilt';

export const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn('right', 'spining', 0.5 * index, 0.7)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            option={{ max: 45, scale: 1, speed: 450 }}
            className='rounded-[20px] bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>

      </Tilt>
    );
  };
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='m-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am skillful web developer. I graduated from Lighthouse Lab in 2022
        with diploma of Web Development program, also I graduated from NAIT with
        two years of diploma in Electrical Engineering Technology. I graduated
        from Lighthouse Lab in 2022 with diploma of Web Development program,
        also I graduated from NAIT with two years of diploma in Electrical
        Engineering Technology. I graduated from Lighthouse Lab in 2022 with
        diploma of Web Development program, also I graduated from NAIT with two
        years of diploma in Electrical Engineering Technology.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} icon={service.icon} title={service.title} />
        ))}
      </div>
    </>
  );
};
