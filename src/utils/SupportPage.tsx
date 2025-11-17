import Footer from "../components/Footer";
import Header from "../components/Header";

export default function SupportPage() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg flex justify-center items-center h-[70px]"><Header/></div>
      <div className="flex justify-center text-4xl font-semibold mt-20">
          Support & FAQ
        </div>
      <div className="flex flex-col ml-120 mt-15">
        
        <div className="flex flex-col w-[50vw] ">
          <div className="flex text-3xl font-semibold ">Need help?</div>
          <div className="text-sm font-semibold text-gray-800 mt-3">We are here to support you!</div>
          <div className="text-sm font-semibold text-gray-800 mt-3">Contact our team at:</div>
          <div className="text-sm font-semibold ">info@quantuslabs.ai</div>
        </div>
        <div className="flex flex-col w-[50vw] mt-8">
          <div className="text-3xl font-semibold">Folio AI Support</div>
          <div className="text-sm font-semibold text-gray-800 mt-2" >
            Welcome to Folio AI Support! Here you'll find essential information
            and quick assistance to help you get the most out of Folio AI.
          </div>
        </div>
        <div className="flex flex-col w-[50vw] mt-8"> 
          <div className="text-3xl font-semibold">What is Folio AI?</div>
          <div  className="text-sm font-semibold text-gray-800 mt-2">
            Folio AI is an innovative B2B application designed specifically for
            SMEs (small-to- medium enterprises), manufacturers, and
            distributors. It helps businesses easily create digital product
            catalogs using AI-driven tools, making product management effortless
            and highly effective. 
          </div>
        </div>
        <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">Getting Started</div>
            <div  className="text-sm font-semibold text-gray-800 mt-2">To start using Folio AI, you need an active subscription. Folio AI offers three subscription tiers:</div>
            <div className="flex flex-col ml-7">
                <div  className="text-sm font-semibold text-gray-800 mt-2">1.Starter: $29/month, 1 user, 580K AI credits, up to 30 publishable products.</div>
                <div  className="text-sm font-semibold text-gray-800 mt-2">2.Growth: $79/month, 3 users, 2M AI credits, up to 120 publishable products.</div>
                <div  className="text-sm font-semibold text-gray-800 mt-2">3.Professional: $149/month, 7 users, 4M AI credits, up to 300 publishable products.</div>

            </div>
            <div  className="text-sm font-semibold text-gray-800 mt-2">All tiers include unlimited product creation and lists. The subscription determines the number of products you can publish publicly.</div>
        </div>
        <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">Creating and Managing Products</div>
            <div className="text-sm font-semibold text-gray-800 mt-2">Creating products with Folio AI is intuitive and effortless—just upload a photo, and let our AI handle the rest!</div>
            <div>
                <div className="text-sm font-semibold mt-2 ml-3">1. AI-powered product creation:</div>
                <div className="text-sm font-semibold text-gray-800 mt-1  ml-7 ">Simply snap a photo or select from your gallery, and our AI automatically generates product titles, descriptions, and key attributes, significantly reducing your workload.</div>
            </div>
             <div>
                <div className="text-sm font-semibold mt-2 ml-3">2. Interacting with AI Agent:</div>
                <div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*After AI analysis, a ribbon at the bottom clearly indicates connectivity status (e.g., "Connecting...") and lets you easily control your interaction with the AI agent using the microphone icon.</div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*Speak naturally to our AI agent, adding crucial product details without needing to type—perfect for busy SMEs.</div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*For noisy environments, we recommend muting the microphone between interactions to minimize background interference.</div>
                </div>
            </div>
            <div>
                <div className="text-sm font-semibold mt-2 ml-3">3. Saving Products:</div>
                <div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*Click the forward arrow button in the ribbon to save your product</div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*You will see a confirmation message: “All Set! Your changes have been saved successfully.”</div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*You can either “Continue Edit” to adjust or add product details manually or choose “Done” to finalize the creation.</div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">Creating Lists and Stores</div>
             <div>
                <div className="text-sm font-semibold mt-2 ml-3">1. Creating Lists:</div>
                <div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*Navigate to the “Lists” tab under "My Folio."</div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*Select “+ Add New,” choose products, click “Next,” name your list, and finalize it.</div>
                </div>
            </div>
            <div>
                <div className="text-sm font-semibold mt-2 ml-3">2. Managing Lists and Stores:</div>
                <div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*Edit lists by clicking the three-dot icon in the upper-right corner.</div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*Create a store from a list by entering store details (name and description) and selecting which products to showcase.</div>
                    <div className="text-sm font-semibold text-gray-800 mt-1  ml-7">*A sharable link is generated, allowing you to distribute your store directly to B2B clients.</div>
                </div>
            </div>
        </div>
        <div className="flex justify-end px-30"><img src="bookademopic.png"/></div>
      </div>
      <Footer/>
    </div>
  );
}
