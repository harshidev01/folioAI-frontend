

export default function WhyFolio(){
    return(
        <div className="flex flex-col items-center mt-20">
            <div className=" font-semibold text-gray-500">Why Folio AI?</div>
            <div className="text-4xl font-semibold mt-6">Store smarter. Sell faster. Speak to the world.</div>
            <div className="flex mt-10 p-10 gap-18">
                <div className=" w-[20vw] flex flex-col ">
                    <img src="whyfolio-pic1.png" className="w-[10vw] h-[15vh] flex"/>
                    <div className="text-lg ">Effortless Setup</div>
                    <div className="flex text-gray-500">Create your catalog through a simple conversation.</div>
                </div>
                <div className=" w-[18vw] flex flex-col ">
                    <img src="whyfolio-pic2.png" className="w-[10vw] h-[15vh] flex"/>
                    <div className="text-lg ">Smart Organization</div>
                    <div className="flex text-gray-500">Group products seamlessly and share instantly.</div>
                </div>
                <div className=" w-[18vw] flex flex-col ">
                    <img src="whyfolio-pic3.png" className="w-[10vw] h-[15vh] flex"/>
                    <div className="text-lg ">Modernize Your Business</div>
                    <div className="flex text-gray-500">Ideal for SME manufacturers stepping into the digital era.</div>
                </div>
            </div>
        </div>
    )
}