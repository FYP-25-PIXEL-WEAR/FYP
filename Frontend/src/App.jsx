import {useState,useEffect} from 'react'
import LoginSignUp from './Components/LoginSignUp'
import Navbar from './Components/Navbar'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UserProfile from './Components/UserProfile'
import './App.css'
import ForgotPassword from './Components/ForgotPassword'
const App = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [showHeader, setShowHeader] = useState(true)
  const [showFooter, setShowFooter] = useState(true)
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    isToggled
      ? body.setAttribute("class","bg-dark text-white")
      : body.removeAttribute("class");
  }, [isToggled]);

  return (
    <>
      <BrowserRouter>
      {showHeader && <Header isToggled={isToggled} setIsToggled={setIsToggled}/>}
      {showNavbar && <Navbar />}
      <Routes basename="/app">
        <Route path="/" element={<LoginSignUp setShowNavbar={setShowNavbar} setShowHeader={setShowHeader} setShowFooter={setShowFooter} />} />
        <Route path='/forgotpassword' element={ <ForgotPassword setShowNavbar={setShowNavbar} setShowHeader={setShowHeader} setShowFooter={setShowFooter}/>} />
        <Route path="/home" element={<Home setShowNavbar={setShowNavbar} setShowHeader={setShowHeader} setShowFooter={setShowFooter}/>} />
        <Route path="/userprofile" element={<UserProfile setShowNavbar={setShowNavbar} setShowHeader={setShowHeader} setShowFooter={setShowFooter}/>} />
        </Routes>
      {showFooter && <Footer />}
      </BrowserRouter>
    </>
  )
}

export default App