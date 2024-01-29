import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/NavBar/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import LandingPage from "./pages/LandingPage/LandingPage";
import FAQPage from "./pages/FAQPage/FAQPage";
import ContactusPage from "./pages/ContactUsPage/ContactusPage";
import AboutusPage from "./pages/AboutUsPage/AboutusPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage/TermsAndConditionsPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/navbar" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
          <Route
            path="/termsandconditions"
            element={<TermsAndConditionsPage />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
