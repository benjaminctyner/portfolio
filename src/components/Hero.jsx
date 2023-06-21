import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <section className={`relative w-full h-screen smmx-auto`}>
      <div
        className={`${styles.paddingX}  absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Ben</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build websites
            <br className='sm:block hidden' /> and web applications.
          </p>
          <h1 className='mt-20'>test</h1>
        </div>
      </div>
      {isBigScreen && <ComputersCanvas />}
      {isTabletOrMobile && <h1>testing</h1>}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'></a>
      </div>
    </section>
  );
};

export default Hero;
