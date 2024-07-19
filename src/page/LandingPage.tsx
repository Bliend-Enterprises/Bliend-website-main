import AdvertisingPage from "../components/Advertising"
import Footer from "../components/FooterPage"
import HeaderComponent from "../components/Header"
import MarketingPage from "../components/Marketing"
import ServicePage from "../components/ServicePage"
import SoftwareSolutions from "../components/SoftwareSolutions"
// import TestimonialPage from "../components/TestimonialPage"

const LandingPage = () => {

  return <div>
    <div className="app-page">

      <HeaderComponent />
      <div style={{ height: "50px", width: 'auto' }}></div>
      <ServicePage />
    </div>
    <div >
      <AdvertisingPage />
    </div>
    <div className='app-page'>
      <MarketingPage />
    </div>
    <div>
      <SoftwareSolutions />
      
    </div>
    <div className='app-page'>
      {/* <TestimonialPage /> */}
      <div style={{ height: "50px", width: 'auto' }}></div>
      <div >
        <Footer />
      </div>
      
    </div>

  </div>
}

export default LandingPage