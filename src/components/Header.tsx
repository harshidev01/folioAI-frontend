import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [lang, setLang] = useState("English");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate(path: string) {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } }); // pass id to homepage
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" }); // 👈 this line
    }
  };

  
  return (
    <div>
      <div className="w-full justify-center flex py-8 gap-24 ">
        <div className="flex items-center gap-2">
          <div className="bg-black w-[2vw] h-[4vh] flex justify-center items-center rounded-md">
            <div className="text-white text-xl font-mono ">FA</div>
          </div>
          <div className="text-3xl font-bold">Folio AI</div>
        </div>
        <div className="flex items-center text-sm gap-9 ">
          <div
            className="cursor-pointer hover:text-gray-500  font-semibold"
            onClick={() => handleScroll("howitworks")}
          >
            How-it-works
          </div>
          <div
            className="cursor-pointer hover:text-gray-500  font-semibold"
            onClick={() => handleScroll("showcase")}
          >
            Showcase
          </div>
          <div
            className="cursor-pointer hover:text-gray-500  font-semibold"
            onClick={() => handleScroll("whyfolio")}
          >
            Why-folio?
          </div>
          <div
            className="cursor-pointer hover:text-gray-500  font-semibold"
            onClick={() => handleScroll("globalreach")}
          >
            Global-reach
          </div>
          <div
            className="cursor-pointer hover:text-gray-500  font-semibold"
            onClick={() => handleNavigate("/signin")}
          >
            Sign-in
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="relative inline-block ">
            <div className="flex items-center gap-2 border w-[7vw] h-[4vh] text-sm rounded-md justify-between px-3 py-1">
              <CiGlobe size={16} />
              <span>{lang}</span>
              <IoIosArrowDown
                size={16}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>

            {open && (
              <div className="absolute mt-1 bg-white border rounded-md shadow-md w-32">
                <div
                  onClick={() => {
                    setLang("English");
                    setOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  English
                </div>
                <div
                  onClick={() => {
                    setLang("Türkçe");
                    setOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  Türkçe
                </div>
                <div
                  onClick={() => {
                    setLang("Deutsch");
                    setOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  Deutsch
                </div>
                <div
                  onClick={() => {
                    setLang("Italiano");
                    setOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  Italiano
                </div>
                <div
                  onClick={() => {
                    setLang("Español");
                    setOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  Español
                </div>
                <div
                  onClick={() => {
                    setLang("Français");
                    setOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  Français
                </div>
                <div
                  onClick={() => {
                    setOpen(false);
                    setLang("Русский");
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  Русский
                </div>
              </div>
            )}
          </div>
          <button
            className="bg-black text-white p-3 text-sm rounded-md cursor-pointer"
            onClick={() => handleNavigate("/bookdemo")}
          >
            Book a demo
          </button>
        </div>
      </div>
    </div>
  );
}
