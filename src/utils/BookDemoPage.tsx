import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BookDemoPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-sm text-gray-400 mt-5">
          Get Started
        </div>
        <div className="text-3xl font-semibold mt-5">
          Fill out the form to receive demo access to Folio
        </div>
        <div className="font-semibold text-sm text-gray-400 mt-5">
          Find out how the catalogs created by Folio in just minutes look like.
        </div>
        <div className="flex flex-col mt-15 gap-5">
          <div className="flex gap-20 justify-center items-center ">
            <div className="text-sm font-semibold">Name</div>
            <input
              className="border rounded-md p-1 px-2 w-[15vw] mt-1 border-gray-300 shadow-sm text-sm"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="flex gap-20 justify-center items-center ">
            <div className="text-sm font-semibold">Email</div>
            <input
              className="border rounded-md p-1 px-2 w-[15vw] mt-1 border-gray-300 shadow-sm text-sm"
              type="text"
              placeholder="Your email"
            />
          </div>
          <div className="flex gap-19 justify-center items-center ">
            <div className="text-sm font-semibold">Phone</div>
            <input
              className="border rounded-md p-1 px-2 w-[15vw] mt-1 border-gray-300 shadow-sm text-sm"
              type="text"
              placeholder="Your phone number"
            />
          </div>
          <div className="flex gap-20 justify-center items-center ">
            <div className="text-sm font-semibold">Company</div>
            <input
              className="border rounded-md p-1 px-2 w-[15vw] mt-1 mr-5 border-gray-300 shadow-sm text-sm"
              type="text"
              placeholder="Your company"
            />
          </div>
          <div className="flex gap-20 justify-center items-center ">
            <div className="text-sm font-semibold">Message</div>
            <input className="border rounded-md p-5 mt-1 mr-12  border-gray-300 shadow-sm " />
          </div>
        </div>
        <button className="bg-blue-500 text-white rounded-md p-2 mt-15 font-semibold w-[10vw] cursor-pointer ">
          Submit
        </button>
      </div>
      <div className="flex justify-end px-30">
        {" "}
        <img src="bookademopic.png" />
      </div>
      <Footer />
    </div>
  );
}
