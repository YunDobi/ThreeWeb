import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { elecProjects } from '../constant';
import { SectionWrapper } from '../higherImprtant';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, service }) => (
  <Tilt className='xs:w-[250px] w-full '>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient h-[25rem] p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] px-12 min-h-[398px] flex justify-evenly items-center flex-col hover:cursor-pointer '
        onClick={() => window.open(service.source_code_link)}
      >
        <img
          src={service.image}
          alt='web-development'
          className='object-contain rounded-[20px] -rotate-90 w-full px-2'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const WorkBody = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Electrical</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-around'>
        {elecProjects.map((service, index) => {
          return (
            <ServiceCard key={service.name} index={index} service={service} />
          );
        })}
      </div>
    </>
  );
};

export function Elec() {
  return SectionWrapper(WorkBody, 'elect');
}
