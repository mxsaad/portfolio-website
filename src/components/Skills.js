import React, { useEffect, useState } from 'react';
import ShowcaseItem from './ShowcaseItem';
import db from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';


const Skills = () => {
  const [languages, setLanguages] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  const langRef = collection(db, 'language-skills');
  const techRef = collection(db, 'technology-skills');

  const getSkills = (ref, setSkills) => {
    onSnapshot(query(ref, orderBy('order')), (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSkills(items);
    });
  }

  useEffect(() => {
    getSkills(langRef, (items) => setLanguages(items));
    getSkills(techRef, (items) => setTechnologies(items));
  })

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
            return <ShowcaseItem key={i} name={lang.name} icon={lang.img}/>;
          })}
        </div>

        {/* Technologies */}
        <div className='w-full flex py-4 px-10 md:px-14 lg:px-20 gap-4 overflow-x-auto'>
          { technologies.map((tech, i) => {
            return <ShowcaseItem key={i} name={tech.name} icon={tech.img}/>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;