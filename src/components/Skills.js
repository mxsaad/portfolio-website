import React from 'react';
import ShowcaseItem from './ShowcaseItem';
import languages from '../data/skills_languages.json';
import technologies from '../data/skills_technologies.json';

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
          { languages.map((lang, i) => {
            return <ShowcaseItem key={i} name={lang.name} icon={require(`../img/icon/${lang.img}`)} />;
          })}
        </div>

        {/* Technologies */}
        <div className='w-full flex py-4 px-10 md:px-14 lg:px-20 gap-4 overflow-x-auto'>
          { technologies.map((tech, i) => {
            return <ShowcaseItem key={i} name={tech.name} icon={require(`../img/icon/${tech.img}`)} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;