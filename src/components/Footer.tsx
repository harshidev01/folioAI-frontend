import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
 const navigate = useNavigate();

  function handleNavigate(path:string){
    navigate(path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  }


  return (
    <div className="flex w-full">
      <div className="w-full bg-black text-white justify-center flex flex-col items-center">
        <div className="flex w-[20vw] text-3xl font-semibold">
          Spin up your first smart store in minutes and engage customers
          everywhere — start now!
        </div>
        <div className="font-semibold text-gray-500 mt-5">
          Don’t miss out—join the future of industrial commerce today!
        </div>
        <div className="flex gap-15 mt-5">
          <button className="bg-blue-300 rounded-md w-[8vw] h-[4vh] text-white font-semibold text-sm cursor-pointer">
            Get started today!
          </button>
          <div className="border flex justify-between items-center  w-[9vw] h-[4.5vh] px-2 p-3 bg-white text-black rounded-sm cursor-pointer">
            <FaApple className="text-3xl" />
            <div className="flex flex-col font-semibold">
              <div className="text-xs">Download on the</div>
              <div className="flex tex-sm">App Store</div>
            </div>
          </div>
        </div>
        <div className=" flex text-xs text-gray-600 mt-32">© 2025 Quantus Labs Ltd. | Folio AI is developed and owned by Quantus Labs.</div>
        <div className=" flex text-xs text-gray-600 mt-5 gap-15">
            <div onClick={()=> handleNavigate("/support")} className="flex cursor-pointer">Support & FAQ</div>
            <div onClick={()=> handleNavigate("/privacypolicy")} className="flex cursor-pointer">Privacy Policy</div>
            <div onClick={()=> handleNavigate("/termsandconditions")} className="flex cursor-pointer">Terms and Conditions</div>
        </div>
      </div>
      <div className="w-full bg-gray-200 justify-center flex">
        <img src="footerpic.png" />
      </div>
      
    </div>
  );
}
