import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
// import { services } from '../constant/index';
import { projects } from '../constant';
import { SectionWrapper } from '../higherImprtant';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const AboutBody = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I recently graduated from the Lighthouse Lab with diploma in Web
        development. Additionally, I have two years diploma that I achieve from
        NAIT with Electrical Engineering Technology. I am passionate to learning
        new technologies, and love to communicate with others to share the
        knowledge, and I have strong time management skill.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {projects.map((service, index) => {
          return <ServiceCard key={service.name} index={index} icon={service.image} title={service.name} />;
        })}
      </div>
    </>
  );
};

export function About() {
  return SectionWrapper(AboutBody, 'about');
}
