"use client";

import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

interface NavbarT {
    menus: {
        name: string
        id: string
        isHidden?: boolean
    }[]
}

const Navbar = ({ menus }: NavbarT) => {
    // console.log(menus)
    const [openMenu, setOpenMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState<string|null>(null)

    const [hidden, setHidden] = useState(true)

    const navbarHeight = 120
    const scrollToID = (id: string, behavior: ScrollBehavior = "smooth") => {
        const elem = document.getElementById(id)
        if(elem){
          const elementPosition = elem.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: behavior ?? "smooth"
          });
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const currentSection = menus.find((menu) => {
                const element = document.getElementById(menu.id);
                if (element) {
                  const rect = element.getBoundingClientRect();
                  return (
                    scrollPosition >= rect.top + window.scrollY - navbarHeight && 
                    scrollPosition < rect.bottom + window.scrollY - navbarHeight
                  );
                }
                return false;
            });

            setActiveMenu(currentSection ? currentSection.id : null)
            setHidden(currentSection !== undefined && currentSection.id == "profile")
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menus])

    useEffect(() => {
        if(openMenu){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [openMenu])

    return (
        <nav className={`bg-primary fixed w-full top-0 ${hidden ? "opacity-0" : "opacity-100"} z-10 transition-opacity duration-300 md:flex`} style={{height: navbarHeight + "px"}}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 h-full">
                <button 
                    type="button" 
                    className="
                        flex
                        items-center  
                        p-2 w-10 h-10 
                        text-sm 
                        rounded-lg 
                        md:hidden 
                        text-white
                        hover:bg-white 
                        hover:text-primary 
                    " 
                    aria-controls="navbar-default" 
                    aria-expanded="false"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Icon icon="mdi:menu" className='text-3xl'/>
                </button>
                <div className={`
                    ${openMenu ? 'top-0' : 'top-[-100vh]'} 
                    w-full md:w-auto md:block flex flex-wrap
                    bg-primary md:bg-transparent
                    fixed left-0 md:static
                    h-[100vh] md:h-auto
                    transition-all duration-1000
                `}>
                    <ul className="
                        font-medium uppercase tracking-widest 
                        flex flex-col md:flex-row justify-center md:justify-self-auto
                        p-4 md:p-0 mt-4 md:mt-0
                        border border-transparent rounded-lg md:border-0
                        bg-transparent 
                        md:space-x-8 rtl:space-x-reverse 
                        w-full md:w-auto
                    ">
                        {menus && menus.filter((menu) => !menu.isHidden).map((menu) => (
                            <li key={menu.id}>
                                <a onClick={() => {
                                    scrollToID(menu.id);
                                    setOpenMenu(false);
                                }} className={`
                                    block 
                                    py-4 md:py-2 md:px-3
                                    text-white bg-primary-focus 
                                    rounded 
                                    text-center md:text-left
                                    w-full md:w-auto
                                    hover:cursor-pointer
                                    ${
                                        activeMenu === menu.id 
                                            ? "bg-red-600"
                                            : "bg-transparent"
                                    }
                                    transition-colors duration-300
                                `} aria-current="page">{menu.name}</a>
                            </li>
                        ))}
                    </ul>

                    <div className='items-center flex w-full justify-center'>
                        <a onClick={() => setOpenMenu(false)} className={`
                            p-3 
                            text-primary
                            text-center md:text-left
                            rounded-full
                            bg-white
                            hover:cursor-pointer
                            transition-colors 
                            w-auto
                            duration-300 
                            md:hidden
                        `} aria-current="page">
                            <Icon icon="mdi:close" className="text-3xl text-center"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;