import SetcionServices from "./components/section-services/SectionService"
import SectionHeader from "./components/section-header/SectionHeader"
import SectionRent from "./components/section-rent/SectionRent"
import ServiceOffer from "./components/service-offer/ServiceOffer"
import SectionImpressions from "./components/section-impressions/SectionImpressions"

function App() {

  return (
    <>
      <SectionHeader />
      <ServiceOffer />
      <SectionImpressions />
      <SetcionServices />
      <SectionRent />
      
    </>
  )
}

export default App
