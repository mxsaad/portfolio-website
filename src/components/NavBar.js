import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <header className='z-10 fixed w-full h-20 bg-gradient-to-tr from-black to-mk-gray flex justify-between items-center px-2 rounded-b-2xl'>
        {/* Initials */}
        <button className={!menuOpen ? 'font-nautigal text-mk-pink text-5xl px-2 hover:text-mk-yellow hover:scale-105 duration-150 z-10'
        : 'font-nautigal text-mk-yellow text-5xl px-2 hover:text-mk-pink hover:scale-105 duration-150  z-10'}>
          MS
        </button>
        
        {/* Desktop Menu */}
        <menu className='hidden md:flex text-mk-pink gap-5 px-4 text-2xl'>
          <li><button className='hover:text-mk-yellow hover:scale-105 duration-150'>About</button></li>
          <li><button className='hover:text-mk-yellow hover:scale-105 duration-150'>Skills</button></li>
          <li><button className='hover:text-mk-yellow hover:scale-105 duration-150'>Work</button></li>
          <li><button className='hover:text-mk-yellow hover:scale-105 duration-150'>Connect</button></li>
        </menu>

        {/* Hamburger (Mobile Only) */}
        <button onClick={() => toggleMenu()} className='md:hidden z-10 px-2 text-4xl hover:scale-105 duration-150'>
          {!menuOpen ? <BiMenuAltRight className='text-mk-pink hover:text-mk-yellow duration-150'/> 
          : <FaTimes className='text-mk-yellow hover:text-mk-pink duration-150'/>}
        </button>

        {/* Mobile Menu */}
        <menu className={!menuOpen ? 'hidden' : 'flex flex-col justify-center items-center gap-10 absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-black to-mk-gray text-5xl text-mk-yellow'}>
          <li><button className='hover:text-mk-pink hover:scale-105 duration-150'>About</button></li>
          <li><button className='hover:text-mk-pink hover:scale-105 duration-150'>Skills</button></li>
          <li><button className='hover:text-mk-pink hover:scale-105 duration-150'>Work</button></li>
          <li><button className='hover:text-mk-pink hover:scale-105 duration-150'>Connect</button></li>
        </menu>
    </header>
  );
}

export default NavBar;