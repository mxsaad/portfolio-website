import React from 'react';
import MemojiConnect from '../img/memoji/connect.png';
import SocialButton from './SocialButton';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { RiLinkedinFill } from 'react-icons/ri';

const Connect = () => {
  return (
    <section name='connect' className='w-full h-screen flex flex-col justify-center items-center gap-4 md:gap-8'>
      {/* Section Header */}
      <h3 className='mt-20 font-nautigal font-bold text-mk-yellow w-fit leading-none text-[4.25rem] md:text-[5rem] lg:text-[5.75rem] underline underline-offset-4 decoration-2 decoration-mk-pink hover:scale-105 duration-150'>Connect</h3>
      {/* Contact Card */}
      <div className='mb-10 flex flex-col md:flex-row justify-center items-center gap-8 max-w-[80vw] md:max-w-[70vw] lg:max-w-[65vw] h-min bg-mk-gray rounded-xl border-2 border-mk-pink duration-150'>
        {/* Memoji Calling */}
        <img src={MemojiConnect} alt="Muhammad Saad's memoji calling." className='bg-mk-pink rounded-b-lg md:rounded-l-lg w-[70%] sm:w-full md:h-full md:w-[12rem] lg:w-[14rem] xl:w-[16rem] duration-150'/>
        <div className='flex flex-col gap-4 pb-8 px-6 sm:px-8 md:pt-8 md:pl-4'>  
          {/* Call to Action */}
          <p className='text-justify text-bold text-mk-yellow max-w-[20rem] lg:max-w-[36rem] leading-none text-md md:text-lg lg:text-xl xl:text-2xl duration-150'>
            Check out my GitHub or LinkedIn to learn more about me, or send me an email to chat!
          </p>
          {/* Buttons */}
          <div className='flex justify-center items-center gap-2'>
            {/* GitHub */}
            <SocialButton icon={ <FiGithub/> } link='https://dub.sh/NPwe4L0'/>
            {/* LinkedIn */}
            <SocialButton icon={ <RiLinkedinFill/> } link='https://dub.sh/tcGwmDg'/>
            {/* Email */}
            <a href='https://dub.sh/CqiQbmr' target='_blank' rel='noopener noreferrer'>
                <button className='px-4 sm:px-6 py-2.5 h-fit text-mk-yellow border-mk-yellow bg-mk-black bg-opacity-80 border-solid rounded-full border-2 text-lg duration-150 hover:text-mk-gray hover:bg-mk-yellow'>
                  Contact <FiArrowRight className='inline'/>
                </button>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;