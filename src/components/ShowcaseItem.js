import React from 'react';

const ShowcaseItem = (props) => {
  return (
    <div className='flex flex-shrink-0 flex-col justify-center items-center w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 gap-4 py-6 bg-mk-gray border-2 border-mk-pink rounded-2xl'>
        <img src={props.icon} alt="Icon for showcase item." className='w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 duration-150'/>
        <p className='text-mk-yellow text-xl md:text-2xl lg:text-3xl duration-150'>{props.name}</p>
    </div>
  );
}

export default ShowcaseItem;