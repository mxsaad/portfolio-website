import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className='flex-shrink-0 flex flex-col justify-center items-center w-[18rem] h-[20rem] gap-4 p-8 rounded-xl border-2 border-mk-pink bg-mk-gray'>
      <h4 className='text-center text-mk-yellow text-bold text-2xl w-full pb-4 border-b-2 border-mk-pink'>{props.name}</h4>
      <p className='text-justify text-mk-yellow text-bold text-lg'>{props.desc}</p>
      <div className='flex gap-4'>
        {props.code && <a href={props.code} target='_blank' rel='noopener noreferrer' className='text-mk-yellow bg-mk-black bg-opacity-80 text-lg px-4 py-2 rounded-full border-mk-yellow border-2 hover:bg-mk-yellow hover:text-mk-gray duration-150'>Code</a>}
        {props.demo && <a href={props.demo} target='_blank' rel='noopener noreferrer' className='text-mk-yellow bg-mk-black bg-opacity-80 text-lg px-4 py-2 rounded-full border-mk-yellow border-2 hover:bg-mk-yellow hover:text-mk-gray duration-150'>Demo</a>}
      </div>
    </div>
  );
}

export default ProjectCard;