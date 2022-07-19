import React from 'react';
import SocialButton from './SocialButton';
import { HiOutlineMail, HiOutlineDownload } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinFill } from 'react-icons/ri';

const Home = () => {
  return (
    <section name='home' className='bg-mk-gray w-full h-screen px-20 flex flex-col justify-center items-center'>
        <div className='flex flex-col'>
            {/* Landing Text */}
            <p className='text-mk-blue text-2xl md:text-3xl lg:text-4xl mb-1 duration-150'>Hi, my name is</p>
            <h1 className='text-mk-pink leading-none text-6xl md:text-7xl lg:text-8xl font-bold hover:scale-105 duration-150'>Muhammad Saad,</h1>
            <h2 className='text-mk-blue leading-none text-[2rem]  md:text-5xl lg:text-6xl font-bold mt-2 duration-150'>Software Developer.</h2>

            {/* Resume & Social Links */}
            <div className='flex gap-2 mt-4'>
              {/* Resume hosted on Google Drive */}
              <a href='https://docs.google.com/document/d/1eQl8Bg3VVh6RjpNkUYHSpQKtDNA2mJU7/edit?usp=sharing&ouid=111841621761945418941&rtpof=true&sd=true' target='_blank' rel='noopener noreferrer'>
                <button className='px-6 py-2.5 text-mk-yellow border-mk-yellow border-solid rounded-full border-2 text-lg duration-150 hover:text-mk-gray hover:bg-mk-yellow'>
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