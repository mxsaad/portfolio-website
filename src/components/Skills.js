import React from 'react';
import ShowcaseItem from './ShowcaseItem';
import Java from '../img/icon/java.svg';
import JavaScript from  '../img/icon/javascript.svg';
import HTML from '../img/icon/html.svg';
import CSS from '../img/icon/css.svg';
import Bash from '../img/icon/bash.svg';
import Python from '../img/icon/python.svg';
import ReactIcon from '../img/icon/react.svg';
import Tailwind from '../img/icon/tailwind.svg';
import Vim from '../img/icon/vim.svg';
import Docker from '../img/icon/docker.svg';
import Git from '../img/icon/git.svg';
import Vagrant from '../img/icon/vagrant.svg';

const Skills = () => {
  return (
    <section name='skills' className='w-full h-screen flex flex-col justify-center gap-8'>
      <div className='flex flex-col justify-center gap-8'>
        <div className='px-10 md:px-14 lg:px-20'>
          {/* Section Header */}
          <h3 className='font-nautigal font-bold text-mk-yellow w-fit leading-none text-[4.25rem] md:text-[5rem] lg:text-[5.75rem] underline underline-offset-4 decoration-2 decoration-mk-pink hover:scale-105 duration-150'>Skills</h3>
          {/* Description */}
          <p className='text-mk-yellow text-bold text-xl md:text-2xl lg:text-3xl duration-150'>
            Here's what's in my toolbox.
          </p>
        </div>
        {/* Languages */}
        <div className='w-full flex py-4 px-10 md:px-14 lg:px-20 gap-4 overflow-x-auto'>
          <ShowcaseItem name='Java' icon={Java}/>
          <ShowcaseItem name='JavaScript' icon={JavaScript}/>
          <ShowcaseItem name='HTML' icon={HTML}/>
          <ShowcaseItem name='CSS' icon={CSS}/>
          <ShowcaseItem name='Bash' icon={Bash}/>
          <ShowcaseItem name='Python' icon={Python}/>
        </div>
        {/* Technologies */}
        <div className='w-full flex py-4 px-10 md:px-14 lg:px-20 gap-4 overflow-x-auto'>
          <ShowcaseItem name='React' icon={ReactIcon}/>
          <ShowcaseItem name='Tailwind' icon={Tailwind}/>
          <ShowcaseItem name='Vim' icon={Vim}/>
          <ShowcaseItem name='Docker' icon={Docker}/>
          <ShowcaseItem name='Git' icon={Git}/>
          <ShowcaseItem name='Vagrant' icon={Vagrant}/>
        </div>
      </div>
    </section>
  );
}

export default Skills;