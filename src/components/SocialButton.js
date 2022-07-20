import React from 'react';

const SocialButton = (props) => {
  return (
    <a href={props.link} target='_blank' rel='noopener noreferrer'>
       <button className='p-4 text-mk-yellow border-mk-yellow bg-mk-black bg-opacity-80 border-solid rounded-full border-2 text-md duration-150 hover:text-mk-gray hover:bg-mk-yellow'>
        {props.icon}
       </button>
    </a>
  )
};

export default SocialButton;