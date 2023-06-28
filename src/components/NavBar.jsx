import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../constant/index';
import { logo, menu, close } from '../assets/';

export const NavBar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-2 fixed top-0 z-20 bg-primary`}
    >
      <div className='flex justify-between max-w-7x1 mx-auto w-full items-center'>
        <Link
          to={'/'}
          className='flex item-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt='logo'
            className='w-[54px] h-[54px] object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex items-center'>
            Yuncheol Lee
          </p>
          {/* <div>
            <span className=' text-white text-[18px] font-bold cursor-pointer sm:block hidden'>
              Full Stack Developer
            </span>
          </div> */}
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-[40px]'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white cursor-pointer text-[18px] font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* small screen */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}
          >
            <ul className='list-none hidden sm:flex flex-row gap-10'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } hover:text-white cursor-pointer text-[18px] font-medium`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
