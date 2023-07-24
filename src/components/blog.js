import React from "react";
const Blog = ()=>{
    return(
        <section id="products" className="px-2 md:px-0 bg-gray-800">
            <div className="container mx-auto pt-16 px-6 xl:px-0">
                <h1 className="Sf-ui-pro text-white w-full xl:w-1/4 font-black text-2xl sm:text-4xl">Digital Products for Sale</h1>
                <button className="Sf-ui-pro focus:outline-none my-8 flex items-center text-xl text-white font-regular border-b border-white pb-2 mr-3">
                    View all projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                </button>
                <div className="pb-10 xl:pb-0 lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
                    <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-10 lg:mb-20 xl:max-w-sm lg:w-1/2 w-full mx-auto sm:mx-0">
                        <div className="shadow h-64 rounded z-10">
                            <img loading="lazy" src="./images/blog1_1.png" alt="" className="h-full w-full object-cover overflow-hidden rounded-lg" />
                        </div>
                        <div className="px-10 sm:px-20 py-3 sm:py-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                            <h4 className="text-gray-800 text-lg text-center mb-2">Flat Icons Kit</h4>
                            <p className="text-gray-600 text-lg text-center mb-2">PS - Sketch - XD</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-10 lg:mb-20 xl:max-w-sm lg:w-1/2 w-full mx-auto sm:mx-0">
                        <div className="shadow h-64 rounded">
                            <img loading="lazy" src="./images/blog1_2.png" alt="" className="h-full w-full object-cover overflow-hidden rounded-lg" />
                        </div>
                        <div className="px-10 sm:px-20 py-3 sm:py-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                            <h4 className="text-gray-800 text-lg text-center mb-2">Illustrations Library</h4>
                            <p className="text-gray-600 text-lg text-center mb-2">Figma - Sketch - XD</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative lg:mb-20 xl:max-w-sm lg:w-1/2 w-full mx-auto sm:mx-0">
                        <div className="shadow h-64 rounded">
                            <img loading="lazy" src="./images/blog1_3.png" alt="" className="h-full w-full object-cover overflow-hidden rounded-lg" />
                        </div>
                        <div className="px-10 sm:px-20 py-3 sm:py-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                            <h4 className="text-gray-800 text-lg text-center mb-2">Home App Concept</h4>
                            <p className="text-gray-600 text-lg text-center mb-2">Figma - Sketch - XD</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Blog;