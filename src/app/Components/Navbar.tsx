import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className=" bg-yellow-200">
            


<div className="text-black flex justify-evenly items-center">
        <h1 className="text-4xl hover:text-blue-400 cursor-pointer px-28 font-bold">Kids World</h1>
       <ul className= 'flex gap-8 px-3 px--2cursor-default scroll-px-14'>
        <li className="hover:text-blue-400 text-1xl"><Link href="/ Home">Home</Link></li>
        <li className="hover:text-blue-400 text-1xl"><Link href="/ about">About</Link></li>
        <li className="hover:text-blue-400 text-1xl"><Link href="/ our products">shops</Link></li>
        <li className="hover:text-blue-400 text-1xl"><Link href="/ contact us">Contact us</Link></li>
        <button className= "bg-gray-900 text-white text-1xl p1-2 hover:text-blue-400 px-4">Login</button>
  
       </ul>
                </div>
                <div className="mt-20 mx-12">
                <section className="flex gap-8 items-center">
        {/* Left side */}
        <div className="flex-1">
          <h1 className="font-bold text-5xl ">Yahooo  <br/> Here Big <br/> Fashion Deals</h1>
          <p className="text-lg text-gray-600 mt-2">
          fashion industry, multibillion-dollar global enterprise devoted to the business 
          of making and selling kids happiness. Some observers distinguish between the fashion industry
           <br/>There may appear to be differences between the expensive designer fashions shown on the runways of Paris or New York and the mass-produced sportswear and street styles sold in malls and markets around the  types of apparel (men’s, women’s, and children’s) <br/>from the most rarefied and expensive haute couture (literally, “high sewing”) and designer fashions to ordinary everyday clothing—from couture ball gowns to casual sweatpants.
            
          </p>
          <button className="bg-gray-900 text-white py-2 mt-4 px-4" >Visit Us Now</button>
        </div >

        {/* Right Side */}
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"className="flex-1 cursor-pointer hover:shadow-xl z-90">
           <Image width={1500} height={1500} src="/room.png" alt="shoes"  /> 
        </div>
      </section>
                </div>

            </div>
        
    )
}
export default Navbar