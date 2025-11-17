import Header from "../components/Header";
import { FaApple } from "react-icons/fa";
import HowItWorks from "../components/HowItWorks";
import Showcase from "../components/Showcase";
import WhyFolio from "../components/WhyFolio";
import GlobalReach from "../components/GlobalReach";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location]);


  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg flex justify-center items-center h-[70px]">
        {" "}
        <Header />
      </div>
      <div className="flex justify-center items-center ml-10 ">
        <div className="flex flex-col w-[25vw] gap-6">
          <div className="text-5xl gap-">
            <div>Build AI Agents that</div>
            <div>Speak & Sell in</div>
            <div>Minutes</div>
          </div>
          <div className="text-gray-600 font-semibold">
            From your workshop to clients worldwide, , Folio turns your product
            details into share-link smart stores that speak any language —
            instantly.
          </div>
          <button className="bg-blue-300 rounded-md w-[8vw] h-[4vh] text-white font-semibold text-sm cursor-pointer">
            Try Folio AI for Free
          </button>
          <div className="border flex justify-between items-center  w-[9vw] h-[5vh] p-2 rounded-sm cursor-pointer">
            <FaApple className="text-4xl" />
            <div className="flex flex-col font-semibold ">
              <div className="text-xs">Download on the</div>
              <div>App Store</div>
            </div>
          </div>
        </div>
        <div>
          <img src="homePage.jpg" />
        </div>
      </div>
      <div id="howitworks" style={{ scrollMarginTop: "70px" }}>
        <HowItWorks />
      </div>
      <div id="showcase" style={{ scrollMarginTop: "70px" }}>
        <Showcase />
      </div>
      <div id="whyfolio" style={{ scrollMarginTop: "70px" }}>
        <WhyFolio />
      </div>
      <div id="globalreach" style={{ scrollMarginTop: "70px" }}>
        <GlobalReach />
      </div>
      <Footer />
    </div>
  );
}
