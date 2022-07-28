import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  const getRepos = async () => {
    const response = await fetch('https://gh-pinned-repos.egoist.sh/?username=mxsaad');
    const data = await response.json();
    setRepos(data);
  }  
  
  useEffect(() => {
    getRepos().then(() => {
      setLoading(false);
    }).catch(error => null)
  }, [])
  
  return (
    <section name='work' className='w-full h-screen flex flex-col justify-center gap-8'>
      <div className='flex flex-col justify-center gap-8'>
        <div className='px-10 md:px-14 lg:px-20'>
          {/* Section Header */}
          <h3 className='font-nautigal font-bold text-mk-yellow w-fit leading-none text-[4.25rem] md:text-[5rem] lg:text-[5.75rem] underline underline-offset-4 decoration-2 decoration-mk-pink hover:scale-105 duration-150'>Work</h3>
          {/* Description */}
          <p className='text-mk-yellow text-bold text-xl md:text-2xl lg:text-3xl duration-150'>
            Here are my projects.
          </p>
        </div>
        {/* Projects */}
        <div className='w-full flex py-4 px-10 md:px-14 lg:px-20 gap-4 overflow-x-auto'>
          <ProjectCard name='linux-workshops' desc='Created the curriculum for and hosted a series of workshops about Bash scripting.' demo='https://www.youtube.com/playlist?list=PLYCm5R657r6ThEOcRaBXuMPWAtecBfZcU'/>
          {!loading && repos.map((repo, i) => {
            return (
              <ProjectCard key={i} name={repo.repo} desc={repo.description} code={repo.link} demo={repo.website}/>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;