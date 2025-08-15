import React from 'react'
import { FaRegSmile, FaShieldAlt, FaTruck, FaUserMd } from 'react-icons/fa';

const reasons=[
    {
        icon:<FaUserMd size={30} />,
        titile:"Certified Articles",
        desc:"Guarantee for your articles",
    },
    {
        icon:<FaRegSmile size={30} />,
        titile:"10M+ Happy Customer",
        desc: "Trusted by millions worldwide for exceptional quality and outstanding customer service.",
    },
    {
        
        icon:<FaTruck size={30} />,
        titile:"Fast & Reliable Delivery",
        desc: "on-time doorstep delivery for all is-land.",
    },
    {
        
        icon:<FaShieldAlt size={30} />,
        titile:"Safe & Varified Services",
        desc: "Background-verified staff",
    },

]

function WhyChoosUs() {
  return (
   <section className="bg-gradient-to-b from-[#f3eae3] to-[#fefaf6] py-20 px-6 md:px-14">
    <h2 className="text-4xl font-bold text-center text-[#5a3blf] mb-4">Why Choose Jewel X?</h2>
    <p className="text-center text-[#7c5a3b] max-w-2xl mx-auto mb-16 text-[17px]">
        At Jewel X, we offer a unique blend of quality, craftsmanship, and customer service that sets us apart in the jewellery industry.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
       {reasons.map((reason, index)=>(
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-[#e5d3c3] hover:shadow-2xl transition duration-300 group">
            <div className="bg-[#fff1e6] w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-5 shadow-md group-hover:bg-[#dcbfa6] transition">
                    <span className="text-[#8b4513]">{reason.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-[#5a3b1f] mb-2">{reason.titile}</h3>
            <p className="text-[#6b4a2e] text-sm leading-relaxed">{reason.des}</p>
        </div>
       ))}
    </div>
   </section>
  )
}

export default WhyChoosUs
