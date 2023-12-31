import React from "react";
const Footer = ()=>{
    return(
        <div className="w-full px-6 lg:px-20 xl:px-40">
            <div className="container mx-auto py-12">
                <div className="xl:flex flex-wrap justify-between">
                    <div className="w-11/12 xl:w-1/3 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
                        <p className="text-gray-800 text-base">2023. All Rights Reserved</p>
                    </div>
                    <div className="w-11/12 xl:w-1/3 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
                        <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
                            <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0"><a href="#">Terms of service</a></li>
                            <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0"><a href="#">Privacy Policy</a></li>
                            <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0"><a href="#">Security</a></li>
                            <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0"><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="w-11/12 xl:w-1/3 lg:w-1/3 sm:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
                        <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                            <div>
                                <a href="#">
                                    <svg aria-label="Github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;