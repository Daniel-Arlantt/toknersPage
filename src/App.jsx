import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import InfoCard from "./components/InfoCard"
import QInfos from "./components/QInfos"
import SliderMobile from "./components/SliderMobile"
import TokIsComing from "./components/TokIsComing"
import TwoCards from "./components/TwoCards"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <Home/>
      <TwoCards/>
      <InfoCard/>
      <QInfos/>
      <TokIsComing/>
      <SliderMobile/>
      <Footer/>
    </div>
  )
}

export default App
