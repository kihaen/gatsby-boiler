import React from "react";
const Navigator = ()=>{
    return(
        <div className="w-full flex justify-center elements-center pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-20 lg:pb-24 text-gray-800">
            <svg id="goDown" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-chevrons-down" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="7 7 12 12 17 7" />
                <polyline points="7 13 12 18 17 13" />
            </svg>
        </div>
    )
}
export default Navigator;