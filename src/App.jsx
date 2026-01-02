import Header from "./components/Header/Header"
import HeroSlider from "./components/HeroSlider/HeroSlider"
import About from "./components/About/About"
import Glossary from "./components/Glossary/Glossary"
import Feature from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import AdminSec from "./components/AdminSec/AdminSec"

import FakeLoader from "./components/FakeLoader/FakeLoader"
import Chatbot from "./components/Chatbot"

import "./styles/bootstrap.min.css"
import "./styles/plugins.css"
import "./styles/global.css"

const App = () => {
  return (
    <>
      <FakeLoader
        timeToHide={500}
        bgColor="#09C7E0"
        spinner="spinner1"
        zIndex={99999}
      />

      <div className="main-wrapper">
        {/* Header Component */}
        <Header />

        {/* Hero Slider Component */}
        <HeroSlider />

        {/* About Component */}
        <About />

        {/* Glossary Component */}
        <Glossary />

        {/* Feature Component */}
        <Feature />

        {/* Admin Sec */}
        <AdminSec />

        {/* Footer Component */}
        <Footer />

        {/* Chatbot */}
        <Chatbot />
      </div>
    </>
  )
}

export default App;