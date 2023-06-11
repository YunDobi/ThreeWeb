import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { SectionWrapper } from '../higherImprtant';
import { fadeIn, textVariant } from '../utils/motion';

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
    </>
  );
};

export function About() {
  return SectionWrapper(AboutBody, 'about');
}
