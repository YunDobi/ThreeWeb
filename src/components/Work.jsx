import tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../higherImprtant';
// have to change the projects
import { projects } from '../constant';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div>
      test
    </motion.div>
  )

}

const WorkBody = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Introudution of the Projects
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index ={index} {...project} />
          )
        })}
      </div>
    </>
  );
};

const Work = () => SectionWrapper(WorkBody, 'work');

export default Work;
