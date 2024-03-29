import React from 'react';
import MemojiWave from '../img/memoji/wave.png';

const About = () => {
  return (
    <section name='about' className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='pt-10 flex flex-col justify-center items-center gap-4 md:gap-8 max-w-[80vw] md:max-w-[70vw] lg:max-w-[65vw] lg:max-h-min'>
            {/* Section Header */}
            <h3 className='font-nautigal font-bold text-mk-yellow leading-none text-[4.25rem] md:text-[5rem] lg:text-[5.75rem] underline underline-offset-4 decoration-2 decoration-mk-pink hover:scale-105 duration-150'>About</h3>
            <p className='text-justify py-4 px-6 text-mk-yellow rounded-2xl border-2 border-mk-pink bg-mk-gray text-md md:text-lg lg:text-xl xl:text-2xl duration-150'>
              <img src={MemojiWave} alt="Muhammad Saad's memoji waving." className='float-left mr-4 bg-mk-pink rounded-lg max-w-[7rem] sm:max-w-[8.5rem] md:max-w-[10rem] lg:max-w-[12rem] h-auto duration-150'/>
              Muhammad Saad is a driven and motivated Computer Science student with a keen interest in software 
              development, machine learning, and health & fitness who loves to grow professionally and personally. 
              He has honed his coding, data analysis, and problem-solving skills through hands-on experience. 
              With a strong work ethic and passion for innovation, Muhammad Saad is poised to make a significant 
              impact in the tech industry and beyond.
            </p>
        </div> 
    </section>
  );
}

export default About;