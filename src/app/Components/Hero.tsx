import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div>
            <h1 className="text-center mt-14 font-bold text-5xl text-green-500">Best Offers</h1>
            <h2 className="text-2xl mt-8 text-center text-slate-950">A good product description starts with an attention-grabbing product title, <br />followed by a brief paragraph telling a story about a product's value</h2>
            

<div className="grid-cols-3 flex justify-evenly">
  <div className="mt-10">
  <Image width={300} height={50} src="/dress.png" alt="background " className="hover:translate-x-2 data-aos=fade-right"></Image>
  <p className="text-xl mt-4 text-center" > for kids Success:<br/>visit For Kids</p>
  <button className="bg-slate-950 text-white px-3  hover:bg-slate-400 mt-5">Order Now</button>
  </div>
  
  <div className="mt-10">
  <Image width={500} height={300} src="/sendl.png" alt="background" className="hover:translate-x-2"></Image>
  <p className="text-xl mt-4 text-center" > for kids Success:<br/>visit For kids</p>
  <button className="bg-slate-950 text-white px-3 hover:bg-slate-400 mt-5">Order Now</button>
  
  </div>
  <div className="mt-10">
  <Image width={400} height={200} src="/watch.png" alt="background " className="hover:translate-x-2"></Image>
  <p className="text-xl mt-4 text-center" > for kids Successs:<br/>visit  For Kids</p>
  <button className="bg-slate-950 text-white px-3 hover:bg-slate-400 mt-5">Order Now</button>
  
  </div>


                </div>
                </div>
    )
}
export default Hero