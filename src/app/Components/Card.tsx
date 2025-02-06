import Reac from "react";
import Image from "next/image";

const Card=()=>{
    return(
  <main>
        <Image width={1000}  height={700}src="/dress5.png" alt="pic" className="hover:translate-y-px"></Image>
        <h1 className="text-4xl text-center text-blue-700 mt-10 ">KID's SHOPPING MART</h1>
        <p className="mt-5 text-center text-black text-2xl">Kids' clothing is not only adorable but also designed for comfort and play. They often feature vibrant colors, fun patterns, and soft fabrics that allow kids to move freely. Plus, they can reflect the child's personality, whether it’s through playful prints or stylish designs.
       Overall, kids' clothes are both functional and fashionable, making them perfect for every adventure!.
        Here are Several desinger Kids Clothes are Available</p>
    <div className=" grid-cols-3 flex   justify-evenly gap-16 px-40 mt-10 items-center">
        <div>
            
        
        {/* text and button align */}
        <h3 className="text-center text-2xl font-semibold mt-2 px-4 ">shoes shop</h3>
        <p className="mt-3 text-gray-900 leading-relaxed">Kids' shoes are designed with both comfort and style in mind. They often feature bright colors and fun designs that appeal to children, while also providing the support and durability needed for active play. Many kids' shoes are lightweight and easy to put on, making them perfect for little ones who are always on the move. The materials used are typically breathable and flexible, ensuring a comfortable fit throughout the day. Overall, kids' shoes blend practicality
 with a sense of fun, encouraging children to express their personalities while keeping their feet happy..</p>
 <Image width={1200}  height={800}src="/shoes1.png" alt="pic" className="hover:translate-y-px"></Image>
 <button className="mt-5 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-solid bg-blue-700 hover:bg-gray-500">Visit us</button>
</div>

<div>
           
         
        {/* text and button align */}
        <Image width={1000}  height={700}src="/watch5.png" alt="pic" className="hover:translate-y-px"></Image>
        <h3 className="text-center text-2xl font-semibold mt-2">kids watches</h3>
        <p className="mt-3 text-gray-900 leading-relaxed"> watches are specially designed for young users, combining fun designs with practicality.
 They often feature bright colors, popular characters, and engaging designs that appeal to children.
 Many models include features like water resistance, durability, and easy-to-read displays.
Some watches also come with educational elements, such as teaching kids how to tell time or 
incorporating fitness tracking. These watches can help kids develop a sense of responsibility 
while also being a stylish accessory that they can personalize to reflect their interests.
 Overall, kids' watches are a great blend of functionality and fun!.</p>
 <button className="mt-5 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-solid bg-blue-700 hover:bg-gray-500">Visit us</button>

</div>

    
    
</div>



    
    </main>
    )
} 
export default Card