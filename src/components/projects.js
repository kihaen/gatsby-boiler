import React from "react";
const Projects = ()=>{
    return(
        <section className="px-2 md:px-20">
            <div className="flex flex-col sm:flex-row items-stretch mb-8 sm:mb-16 container mx-auto">
                <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                    <img loading="lazy" className="w-full object-cover absolute inset-0 object-center h-full" src="./images/section1_1.png" alt="decorative image" />
                </div>
                <div className="container mx-auto w-full sm:w-1/2 py-8 sm:py-16 lg:py-32 px-6 sm:px-12 lg:px-24 bg-gray-100">
                    <h3 className="text-gray-800 text-2xl mb-3 leading-normal tracking-normal font-bold">Mobile App Revamp</h3>
                    <p className="text-gray-600 leading-6 font-normal tracking-normal mb-6">Quae fuerit causa, nollem me tamen laudandis maioribus meis corrupisti nec segniorem ad. Sunt autem quibusdam et harum quidem se oratio, tua praesertim, qui haec subtilius.</p>
                    <button className="focus:outline-none rounded py-3 px-4 text-black border border-black flex justify-center items-center text-base hover:bg-gray-200 bg-transparent">View Product</button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row-reverse items-stretch mb-8 sm:mb-16 container mx-auto">
                <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                    <img loading="lazy" className="w-full object-cover absolute inset-0 object-center h-full" src="./images/section1_2.png" alt="decorative image" />
                </div>
                <div className="w-full sm:w-1/2 py-8 sm:py-16 lg:py-32 px-6 sm:px-12 lg:px-24 bg-gray-100">
                    <h3 className="text-gray-800 text-2xl mb-3 leading-normal tracking-normal font-bold">Education Portal</h3>
                    <p className="text-gray-600 leading-6 font-normal tracking-normal mb-6">Quae fuerit causa, nollem me tamen laudandis maioribus meis corrupisti nec segniorem ad. Sunt autem quibusdam et harum quidem se oratio, tua praesertim, qui haec subtilius.</p>
                    <button className="focus:outline-none rounded py-3 px-4 text-gray-600 border border-gray-600 flex justify-center items-center text-base hover:bg-gray-200 bg-transparent">View Product</button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch mb-8 sm:mb-16 container mx-auto">
                <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                    <img loading="lazy" className="w-full object-cover absolute inset-0 object-center h-full" src="./images/section1_3.png" alt="decorative image" />
                </div>
                <div className="w-full sm:w-1/2 py-8 sm:py-16 lg:py-32 px-6 sm:px-12 lg:px-24 bg-gray-100">
                    <h3 className="text-gray-800 text-2xl mb-3 leading-normal tracking-normal font-bold">Management Webapp</h3>
                    <p className="text-gray-600 leading-6 font-normal tracking-normal mb-6">Quae fuerit causa, nollem me tamen laudandis maioribus meis corrupisti nec segniorem ad. Sunt autem quibusdam et harum quidem se oratio, tua praesertim, qui haec subtilius.</p>
                    <button className="focus:outline-none rounded py-3 px-4 text-gray-600 border border-gray-600 flex justify-center items-center text-base hover:bg-gray-200 bg-transparent">View Product</button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row-reverse items-stretch mb-8 sm:mb-16 container mx-auto">
                <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
                    <img loading="lazy" className="w-full object-cover absolute inset-0 object-center h-full" src="./images/section1_4.png" alt="decorative image" />
                </div>
                <div className="w-full sm:w-1/2 py-8 sm:py-16 lg:py-32 px-6 sm:px-12 lg:px-24 bg-gray-100">
                    <h3 className="text-gray-800 text-2xl mb-3 leading-normal tracking-normal font-bold">The 6th Company Branding</h3>
                    <p className="text-gray-600 leading-6 font-normal tracking-normal mb-6">Quae fuerit causa, nollem me tamen laudandis maioribus meis corrupisti nec segniorem ad. Sunt autem quibusdam et harum quidem se oratio, tua praesertim, qui haec subtilius.</p>
                    <button className="focus:outline-none rounded py-3 px-4 text-gray-600 border border-gray-600 flex justify-center items-center text-base hover:bg-gray-200 bg-transparent">View Product</button>
                </div>
            </div>
            <div className="mb-16 sm:mb-32 container mx-auto px-6 container mx-auto">
                <button className="Sf-ui-pro  focus:outline-none flex items-center text-xl custom-foreground-color font-regular custom-border-bottom pb-2 mr-3">
                    View all projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                </button>
            </div>
        </section>
    )
}
export default Projects;