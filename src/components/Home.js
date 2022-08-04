import React from 'react';
import SocialButton from './SocialButton';
import { HiOutlineMail, HiOutlineDownload } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinFill } from 'react-icons/ri';

const Home = () => {
  return (
    <section name='home' className='bg-home-vert md:bg-home-hor bg-cover w-full h-screen px-6 md:px-10 flex flex-col justify-center items-center'>
        <div className='flex flex-col'>
            {/* Landing Text */}
            <p className='text-mk-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 duration-150'>Hi, my name is</p>
            <h1 className='font-nautigal text-mk-pink font-bold leading-none text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] hover:scale-105 duration-150'>Muhammad Saad,</h1>
            <h2 className='text-mk-blue font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 duration-150'>Software Developer.</h2>

            {/* Resume & Social Links */}
            <div className='flex gap-2 mt-4'>
              {/* Resume hosted on Google Drive */}
              <a href='https://drive.google.com/file/d/1Yb21JxGWYkwB3r4LW5ZGrdLV-U6r4hrJ/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <button className='px-6 py-2.5 text-mk-yellow border-mk-yellow bg-mk-black bg-opacity-80 border-solid rounded-full border-2 text-lg duration-150 hover:text-mk-gray hover:bg-mk-yellow'>
                  Resume <HiOutlineDownload className='inline'/>
                </button>
              </a>
              <SocialButton icon={ <HiOutlineMail/> } link='mailto:msaad3@pm.me'/>
              <SocialButton icon={ <FiGithub/> } link='https://github.com/mxsaad'/>
              <SocialButton icon={ <RiLinkedinFill/> } link='https://www.linkedin.com/in/mxsaad/'/>
            </div>
        </div>
    </section>
  );
}

export default Home;