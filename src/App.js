import './App.css';
import FrontPage from "./Components/FrontPage/FrontPage";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NeedForSpeed from "./Pages/NeedForSpeed";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/ContactUs";
import CallOfDuty from "./Pages/CallOfDuty";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import AssassinCreed from "./Pages/AssassinCreed";
import AboutUs from "./Pages/AboutUS";
import Company from "./Pages/Company";
import AOS from "aos";
import 'aos/dist/aos.css'
import {useEffect} from "react";
import AllProduct from "./Components/AllProduct/AllProduct";


function App() {
    useEffect(()=>{
    AOS.init({
        offset: 120, // Trigger animations after scrolling 120px
        duration: 800, // Animation duration
        easing: 'ease-in-out', // Smooth animations
        once: false, // Ensures that animations happen every time the element comes into view
        anchorPlacement: 'top-bottom',
    })
    },[]);
    useEffect(() => {
        window.scroll(0,0)
    }, []);
  return <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="nfc" element={<NeedForSpeed category="Racing"/>}/>
            <Route path="cod" element={<CallOfDuty category="Shooting"/>}/>
            <Route path="contactus" element={<ContactUs category="Strategy"/>}/>
            <Route path="login" element={<LoginSignup/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="product/:id" element={<Product/>}/>
            <Route path="allproduct" element={<AllProduct/>}/>
            <Route path="ac" element={<AssassinCreed/>}/>
            <Route path="aboutUs" element={<AboutUs/>}/>
            <Route path="company" element={<Company/>}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
  </>
}

export default App;
