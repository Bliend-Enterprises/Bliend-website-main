import { FunctionComponent, useState } from 'react';
import './App.css';
import LandingPage from './page/LandingPage';
import SplashScreen from './page/SplashScreen';
import SEO from './components/SEO';
import ScrollingHeader from './components/ScrollingHeader';

const App: FunctionComponent = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleTimeout = () => {
    setShowSplash(false);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.bliend.in/",
    "name": "Bliend",
    "author": {
      "@type": "Organization",
      "name": "Bliend Enterprises Pvt. Ltd"
    },
    "description": "Bliend - Innovation Meets Imagination",
    "publisher": {
      "@type": "Organization",
      "name": "Bliend Enterprises"
    }
  };

  return (
    <div className="app">
      <SEO 
        title="Bliend - Innovation Meets Imagination"
        description="Unlock your brand's potential with Bliend's expert advertising, dynamic marketing, and innovative software solutions. Partner with us for unstoppable growth!"
        keywords="bliend, digital marketing, bliend enterprises, digital advertising, digital upscaler"
        author="Bliend"
        ogImage="public/ogImage.webp"
        twitterCard="summary_large_image"
        twitterSite="@bliendservices"
        twitterCreator="@bliendservices"
        structuredData={structuredData}
      />
      {showSplash ? (
        <SplashScreen onTimeout={handleTimeout} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
