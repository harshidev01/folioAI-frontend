import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./utils/HomePage";
import HowItWorks from "./components/HowItWorks";
import SignIn from "./utils/SignIn";
import BookDemoPage from "./utils/BookDemoPage";
import SupportPage from "./utils/SupportPage";
import PrivacyPolicyPage from "./utils/PrivacyPolicyPage";
import TermsConditions from "./utils/TermsConditions";
import Showcase from "./components/Showcase";
import WhyFolio from "./components/WhyFolio";
import GlobalReach from "./components/GlobalReach";
import SignupPage from "./utils/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/howitworks" element={<HowItWorks/>}/>
        <Route path="/showcase" element={<Showcase/>}/>
        <Route path="/whyfolio" element={<WhyFolio/>}/>
        <Route path="/globalreach" element={<GlobalReach/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/bookdemo" element={<BookDemoPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicyPage/>}/>
        <Route path="/termsandconditions" element={<TermsConditions/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
