import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import { useMediaQuery } from 'react-responsive';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
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
    </>
  );
};

const About = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1400px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const smallServices = services.slice(0, -1);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[]30px'
      >
        I'm an aspiring software developer looking to leverage my civil
        engineering experience and creativity to impress you with my skills.
      </motion.p>
      <div className='mt-20 flex justify-center flex-wrap gap-10'>
        {isBigScreen
          ? services.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                {...service}
                {...isTabletOrMobile}
              />
            ))
          : smallServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                {...service}
                {...isTabletOrMobile}
              />
            ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
