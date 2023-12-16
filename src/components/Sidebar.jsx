import React from 'react'
import {Link, NavLink } from 'react-router-dom';
import { SiPysyft} from 'react-icons/si'
import { TooltipComponent  } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { hover } from '@syncfusion/ej2-react-schedule';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false);
    }
  }
  const activeLink = 'flex item-center gap-5 pl-4 pt-2 pb-2 rounded-lg text-white text-sm m-2';
  const normalLink = 'flex item-center gap-5 pl-4 pt-2 pb-2 rounded-lg text-sm text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className='ml-3 h-screen 
    md:overflow-hidden overflow-auto 
    md:hover:overflow-auto pb-10'>
    {activeMenu && (<>
      <div className='flex justify-between items-center'>
        <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-md font-extrabold tracking-tight dark:text-white text-slate-900">
          <SiPysyft color='blue' className='text-2xl'/> <span className='text-blue-500 '>Sales Navigator</span>
        </Link>
        <TooltipComponent content='Menu' 
        position='BottomCenter'>
            <button type='button' onClick={()=> setActiveMenu((prevActiveMenu) => !prevActiveMenu )} className="text-xl
             rounded-full p-3 hover:bg-light-gray mt-4 block">
            </button>
        </TooltipComponent>
      </div>
      <div className='mt-3'>
          {links.map((item) =>(
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>  
              {item.links.map((link) => (
                <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor : isActive ? currentColor : '' 
                })}
                className={({ isActive }) =>
                isActive ? activeLink : normalLink
                 }>
                {link.icon}
                 <span className='capitalize'>
                  {link.name}
                 </span> 
                </NavLink>
              ))}
            </div>
          ))} 
      </div>
    </>)}
    </div>
  )
}

export default Sidebar