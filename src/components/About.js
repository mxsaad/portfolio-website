import React from 'react';
import MemojiWave from '../img/memoji/wave.png';

const About = () => {
  return (
    <section name='about' className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='pt-10 flex flex-col justify-center items-center gap-4 md:gap-8 max-w-[80vw] md:max-w-[70vw] lg:max-h-min'>
            {/* Section Header */}
            <h3 className='font-nautigal font-bold text-mk-yellow leading-none text-[4.25rem] md:text-[5rem] lg:text-[5.75rem] underline underline-offset-4 decoration-2 decoration-mk-pink hover:scale-105 duration-150'>About</h3>
            <p className='text-justify py-4 px-6 text-mk-yellow rounded-2xl border-2 border-mk-pink bg-mk-gray text-[1.075rem] sm:text-lg md:text-2xl lg:text-3xl duration-150'>
              <img src={MemojiWave} alt="Muhammad Saad's memoji waving." className='float-left mr-4 bg-mk-pink rounded-lg max-w-[8rem] sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem] h-auto duration-150'/>
              I'm currently a student at Wilfrid Laurier University pursuing an
              Honours BSc in Computer Science. I love learning new and challenging
              technologies by building hands-on projects. My goal is to
              continue expanding my skill set and work alongside other brilliant
              minds to solve complex problems in the technical world.
            </p>
        </div> 
    </section>
  );
}

export default About;