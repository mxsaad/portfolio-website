import React from 'react';
import MemojiWave from '../img/memoji/wave.png';

const About = () => {
  return (
    <section name='about' className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='grid pt-20 lg:pt-0 px-8 gap-8 max-h-full'>
            {/* Section Header */}
            <h3 className='row-start-1 col-start-1 md:col-end-3 lg:col-end-2 font-nautigal font-bold text-center text-mk-yellow leading-none text-[4.25rem] md:text-[5rem] lg:text-[5.75rem] underline underline-offset-4 decoration-2 decoration-mk-pink hover:scale-105 duration-150'>About</h3>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-8 row-start-2 col-start-1 md:col-end-3'>
              {/* Memoji Wave */}
              <img src={MemojiWave} alt="Muhammad Saad's memoji waving." className='max-h-[16rem] w-auto rounded-full border-2 border-mk-pink bg-mk-gray duration-150'/>
              {/* Description */}
              <p className='text-bold text-justify py-4 px-6 text-mk-yellow rounded-2xl border-2 border-mk-pink bg-mk-gray text-lg md:text-xl lg:text-2xl w-[24rem] md:w-[30rem] lg:w-[36rem] duration-150'>
                  I'm currently a student at Wilfrid Laurier University pursuing an
                  Honours BSc in Computer Science. I love learning new and challenging
                  technologies by building hands-on projects. My goal is to
                  continue expanding my skill set and work alongside other brilliant
                  minds to solve complex problems in the technical world.
              </p>
            </div>
        </div> 
    </section>
  );
}

export default About;