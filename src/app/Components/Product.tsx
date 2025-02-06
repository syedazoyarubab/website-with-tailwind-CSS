import React from "react";
import Link from "next/link";
import Image from "next/image";

const Product=()=>{
    return(
 

<div>

    <h1 className="text-5xl text-center mt-12 text-blue-700 font-semibold">our products</h1>
    <div className="text-black flex justify-evenly items-center text-decoration-line: underline">
    
       <ul className= 'flex gap-8 px-3 cursor-default scroll-px-14 mt-5 text-blue-700'>
        <li className="hover:text-blue-400 text-2xl"><Link href="/ Home">Sale</Link></li>
        <li className="hover:text-blue-400 text-2xl"><Link href="/ about">Home</Link></li>
        <li className="hover:text-blue-400 text-2xl"><Link href="/ our products">buy</Link></li>
        <li className="hover:text-blue-400 text-2xl"><Link href="/ contact us">Ready to wear</Link></li>
       </ul>
</div>

<div className="grid-cols-4 flex justify-evenly mt-20 px-40">
    <div >
        <Image width={200} height={200} src="/dress6.png" alt="pic" className="hover:translate-x-3"></Image>
        <p className="text-xl">kids world</p>
        <button className="bg-blue-500 text-black flex items-center">buy now</button>
    </div>
    <div>
    <Image width={200} height={100} src="/dress8.png" alt="pic" className="hover:-translate-x-3"></Image>
    <p className="">Casual style </p>
        <button className="bg-blue-500 text-black flex items-center">buy now</button>
    </div>
    <div>
    <Image width={200} height={200} src="/shoes1.png" alt="pic" className="hover:translate-x-3"></Image>
    <p className="">Kids Shoes</p>
        <button className="bg-blue-500 text-black flex items-center">buy now</button>
    </div>
    <div>
    <Image width={200} height={200} src="/watch2.png" alt="pic"className="hover:translate-x-3"></Image>
    <p className="">Kids Watches</p>
        <button className="bg-blue-500 text-black flex items-center">buy now</button>
    </div>

</div>
<div className="grid-cols-4 flex justify-evenly mt-20 px-40">
<div >
        <Image width={150} height={200} src="/dress5.png" alt="pic" className="hover:-translate-y-3"></Image>
        <p className="text-xl">kids happinesst</p>
        <button className="bg-blue-500 text-black flex items-center">buy now</button>
    </div>
    <div >
        <Image width={150} height={200} src="/shoes2.png" alt="pic" className="hover:-translate-y-3"></Image>
        <p className="text-xl">for comfert</p>
        <button className="bg-blue-500 text-black flex items-center">buy now</button>
    </div>

    <div >
        <Image width={150} height={200} src="/watch4.png" alt="pic" className="hover:-translate-y-3"></Image>
        <p className="text-xl">watches...</p>
        <button className="bg-blue-500 text-black flex items-center">buy now</button>
    </div>


</div>

</div>

    )
}
     
export default Product