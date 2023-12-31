import React, {useState} from "react";
import logo from "../images/logo.png"
import hero from "../images/hero.png"

const Header = ()=>{
    const [showMenu , toggleMenu] = useState(false);
    return(
        <div className="bg-white py-4 md:py-10 md:px-20">
            <header className="mx-auto container px-4 xl:px-0">
                <div className="flex items-center justify-between">
                        <img loading="lazy" className="w-24" src={logo}/>
                    <div>
                        <div onClick={()=>toggleMenu(!showMenu)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        </div>
                            <div id="menu" className={`md:block lg:block ${showMenu ? '' : 'hidden'}`}>
                                <div onClick={()=>toggleMenu(!showMenu)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-4">
                                    <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                                <ul className="flex md:flex text-3xl md:text-base lg:text-base lg:flex flex-col md:flex-row lg:flex-row justify-center items-center fixed md:relative lg:relative top-0 bottom-0 left-0 right-0 bg-white z-20">
                                    <li className="md:mr-8 lg:mr-10 flex items-center">
                                        <a className="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">About</a>
                                    </li>
                                    <li className="md:mr-8 lg:mr-10 flex items-center">
                                        <a className="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">Portfolio</a>
                                    </li>
                                    <li className="md:mr-8 lg:mr-10 flex items-center">
                                        <a className="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">Products</a>
                                    </li>
                                    <li className="md:mr-8 lg:mr-10 flex items-center">
                                        <a className="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">Collaboration</a>
                                    </li>

                                    <li className="md:mr-0 flex items-center">
                                        <a className="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </header>
            <section className="mt-8 sm:mt-24 lg:mt-56 mx-auto container py-12 lg:px-4 xl:px-0 mx-auto container ">
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
                    <div className="flex flex-col lg:w-6/12 md:w-6/12 px-4 lg:px-0 justify-center items-start">
                        <p className="text-2xl text-gray-800 font-light">Hi! I’am <span className="custom-foreground-color">Johathan Iverson</span> and</p>
                        <h1 className="text-5xl sm:text-6xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-gray-800">I’ll Help You Build Your Dream</h1>
                        <p className="text-lg text-gray-600 font-light leading-relaxed pt-8">In quo quaerimus, non provident, similique sunt in voluptate et inter argumentum conclusionemque. Tum dicere exorsus est et quasi architecto beatae vitae dicta sunt, explicabo nemo. Certe inquam, pertinax non emolumento</p>
                        <button className="Sf-ui-pro mt-10 flex items-center text-xl custom-foreground-color font-regular custom-border-bottom pb-2 mr-3 focus:outline-none">
                            Connect with me
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="15" y1="16" x2="19" y2="12" />
                                <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                        </button>
                    </div>
                    <div className="xl-w-11/12 sm:w-1/2 mt-8 sm:mt-0">
                        <div className="flex items-center justify-center sm:justify-end w-full">
                            <img loading="lazy" className="w-3/5" src={hero} alt="header image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header;