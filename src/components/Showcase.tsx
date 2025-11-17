export default function Showcase() {
  return (
    <div className="bg-gray-200 flex justify-center flex-col items-center py-5 mt-15">
      <div className="text-gray-500 font-semibold">Folio AI in Action</div>
      <div className="font-semibold text-4xl mt-4">
        Discover how Folio is transforming your industry
      </div>
      <div className="text-gray-500 font-semibold mt-9">
        This is what the catalogs created by Folio in just minutes look like.
      </div>
      <div className="flex mt-20 px-56">
        <div className="flex font-semibold text-gray-400 gap-20 mb-80 items-center">
          <img
            src="showcase-pic1.png"
            className="drop-shadow-2xl rounded-lg transition-transform duration-300 hover:-translate-y-2"
          />
          <div className="w-[20vw]">
            Leather Manufacturer from Milan sending his goods catalog to London
            and Paris. Folio translates it on the go.
          </div>
        </div>
        <div className="flex font-semibold text-gray-400 gap-20 mt-96 items-center ">
          <div className="w-[20vw]">
            A Swiss watch toolmaker from Zurich shares their latest precision
            gear with workshops in Dubai and Seoul. Folio adapts every detail in
            Arabic and Korean—instantly and flawlessly.
          </div>
          <img
            src="showcase-pic2.png"
            className="drop-shadow-2xl rounded-lg transition-transform duration-300 hover:-translate-y-2"
          />
        </div>
      </div>

      <div className="flex font-semibold text-gray-400 gap-20 mt-32 items-center ">
        <img
          src="showcase-pic3.png"
          className="drop-shadow-2xl rounded-lg transition-transform duration-300 hover:-translate-y-2"
        />
        <div className="w-[20vw]">
          A heritage jewelry maker from Istanbul sends their handcrafted
          collection to boutiques in Tokyo and Berlin. Folio captures the charm
          and translates the sparkle into Japanese and German.
        </div>
      </div>
      <div className="flex font-semibold text-gray-400 gap-20 mt-32 items-center ">
        <div className="w-[20vw]">
          A British farm equipment supplier showcases their compact tillers and
          seeders to distributors in Poland and Brazil. Folio makes the
          machinery catalog speak Polish and Portuguese—ready for action.
        </div>
        <img
          src="showcase-pic4.png"
          className="drop-shadow-2xl rounded-lg transition-transform duration-300 hover:-translate-y-2"
        />
      </div>
    </div>
  );
}
