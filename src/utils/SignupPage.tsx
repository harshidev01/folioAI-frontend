import { useNavigate } from "react-router-dom";

export default function SignupPage() {
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
      <div className="flex flex-col border-gray-700  w-[20vw] h-[40vh] rounded-xl p-6 gap-4 justify-center mt-5 shadow-2xl">
        <div className="text-2xl font-semibold">Join Folio AI</div>
        <div className="text-sm text-gray-500">
          Get started with your account
        </div>

        <div className="flex flex-col gap-1">
          <div>Name</div>
          <input
            type="name"
            placeholder=" Enter your Name"
            className="border-gray-300 border p-1 text-md rounded-md shadow-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>Email</div>
          <input
            type="email"
            placeholder=" Enter yourEmail"
            className="border-gray-300 border p-1 text-md rounded-md shadow-md"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white p-1 rounded-md w-[8vw] justify-center cursor-pointer">
            Create Account
          </button>
        </div>
        <div className="flex text-sm justify-center  gap-1">
          <div className="flex text-gray-500">Already have an account? </div>
          <button className="underline cursor-pointer" onClick={() => handleNavigate("/signin")}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
