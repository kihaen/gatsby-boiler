import React from "react";
const Contact =()=>{
    return(
        <div className="px-0 md:px-20 xl:px-40 mt-16 sm:mt-32 mb-10 sm:mb-20">
            <div className="lg:flex">
                <div className="xl:w-2/5 lg:w-2/5 bg-gray-800 py-10 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
                        <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.</p>
                        <div className="flex pb-4 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                            </div>
                            <p className="pl-4 text-white text-base">+1 (308) 321 321</p>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <p className="pl-4 text-white text-base">Info@alphas.com</p>
                        </div>
                        <p className="text-lg text-white pt-10 tracking-wide">
                            545, Street 11, Block F <br />
                            Dean Boulevard, Ohio
                        </p>
                        <a href="#">
                            <p className="text-white pt-16 font-bold tracking-wide underline">View Job Openings</p>
                        </a>
                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pl-5 pr-5 pb-5 lg:pl-0 lg:pt-5 rounded-tr rounded-br">
                    <div className="bg-white py-4 px-8 rounded-tr rounded-br">
                        <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label for="FullName" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Full Name</label>
                                    <input id="FullName" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label for="Email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Email</label>
                                    <input id="Email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap">
                            <div className="w-2/4 max-w-xs">
                                <div className="flex flex-col">
                                    <label for="Phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Phone</label>
                                    <input id="Phone" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-800 mb-2" for="message">Message</label>
                                <textarea placeholder="" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows="8" id="message"></textarea>
                            </div>
                            <button className="focus:outline-none bg-gray-800 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;