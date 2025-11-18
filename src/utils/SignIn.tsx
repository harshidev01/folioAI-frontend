import { useNavigate } from "react-router-dom";



export default function SignIn() {
  const navigate = useNavigate()
   
  function handleNavigate(path:string){
    navigate(path);
  }

  
  return (
    <div className="flex flex-col justify-center items-center mt-60">
      <div className="flex items-center gap-2">
        <div className="bg-black w-[2vw] h-[4vh] flex justify-center items-center rounded-md">
          <div className="text-white text-xl font-mono ">FA</div>
        </div>
        <div className="text-3xl font-bold">Folio AI</div>
      </div>
      <div className="flex flex-col border-gray-700  w-[20vw] h-[30vh] rounded-xl p-6 gap-4 justify-center mt-5 shadow-2xl">
        <div className="text-lg font-semibold">Sign In</div>
        <div className="text-sm text-gray-500">
          Enter your email to receive a PIN code
        </div>
        
        <input
          type="email"
          placeholder=" Enter yourEmail"
          className="border p-2 rounded-md"
        />
        <div className="flex justify-center">
          <button className="bg-black text-white p-2 rounded-md w-[8vw] justify-center cursor-pointer">
          Send PIN Code
        </button>
        </div>
        <div className="flex text-sm justify-center  gap-1">
          <div className="flex text-gray-500">Don't have an account? </div>
          <button className="underline cursor-pointer" onClick={() => handleNavigate("/signup")} >Sign Up</button>
        </div>
      </div>
    </div>
  );
}
