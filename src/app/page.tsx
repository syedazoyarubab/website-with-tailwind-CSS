   import Image from "next/image";
import Navbar from "./Components/Navbar";
 import Hero from "./Components/Hero";
 import Product from "./Components/Product";
 import Offer from "./Components/Offer";
  import Card from "./Components/Card";
 import FeedBack from "./Components/Feedback";
 import Footer from "./Components/Footer";


export default function Home (){
    return(
        <main>
             <Navbar/>
            <Hero/>
            <Product/>
            <Offer/>
            <Card/>
            <FeedBack/>
            <Footer/>
        </main>
    )
};
