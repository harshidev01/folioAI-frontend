

export default function HowItWorks(){
    return(
        <div className="flex justify-center flex-col items-center">
            <div className="flex font-semibold text-gray-400">How It works</div>
            <div className="font-semibold text-4xl mt-4">Create Smart Stores in Minutes</div>
            <div className="flex gap-36 mt-30">
                <div className=" flex flex-col justify-center items-center w-[15vw] h-fit text-sm font-semibold text-gray-500 transition-transform duration-300 hover:-translate-y-2">
                    <div className="bg-gray-300 rounded-full w-[1vw] md:w-[3vw] h-[3vh] justify-center items-center flex text-white ">1</div>
                    <div className="flex mt-10"><img src=" how-it-works-pic1.png"/></div>
                    <div>Upload photos and talk to our AI—your catalog is ready in minutes.</div>
                </div>
                <div className=" flex flex-col justify-center items-center  w-[15vw] h-fit text-sm font-semibold text-gray-500 transition-transform duration-300 hover:-translate-y-2">
                    <div className="bg-gray-300 rounded-full w-[1vw] md:w-[3vw] h-[3vh] justify-center items-center flex text-white">2</div>
                    <div className="flex mt-10"><img src=" how-it-works-pic2.png"/></div>
                    <div className="mt-7 md:mt-3">Folio scans, organizes, builds and translates your catalog to multiple languages—no tech skills needed.</div>
                </div>
                <div className=" flex flex-col justify-center items-center  w-[15vw] h-fit text-sm font-semibold text-gray-500 transition-transform duration-300 hover:-translate-y-2">
                    <div className="bg-gray-300 rounded-full w-[1vw] md:w-[3vw] h-[3vh] justify-center items-center flex text-white">3</div>
                    <div className="flex mt-10"><img src=" how-it-works-pic3.png"/></div>
                    <div className="mt-1">Create lists and share private store links with clients—they'll get instant answers in any language, hassle-free.</div>
                </div>
            </div>
        </div>
    )
}