import React from 'react';
import { CgNametag } from 'react-icons/cg';
import { FaRing } from 'react-icons/fa';
import { FaDiamond } from 'react-icons/fa6';
import { GiDiamondRing } from 'react-icons/gi';
import { LuReplace } from 'react-icons/lu';
import { MdHomeRepairService, MdOutlineCleaningServices } from 'react-icons/md';

const jewelleryServices =[
  {
    icon:<GiDiamondRing size={40} />,
    title: "Custom Designs",
    desc:"Creating unique,personalised pieces based on the customer's preferences.",
  },
  {
    icon:<FaRing size={40} />,
    title: "Resizing",
    desc:"Adjusting the size of rings and other jewellery to ensure a perfect fit.",
  },
  {
    icon:<MdHomeRepairService size={40} />,
    title: "Jewellery Repair",
    desc:"Fixing broken jewellery, including clasps, chains, and settings.",
  },
  {
    icon:<LuReplace size={40} />,
    title: "Stone Replacement",
    desc:"Replacing lost or damaged stones in rings, necklaces, and other jewellery.",
  },
  {
    icon:<MdOutlineCleaningServices size={40} />,
    title: "Cleaning & Polishing",
    desc:"Thorough cleaning and polishing to restore the shine and luster of jewellery.",
  },
  {
    icon:<CgNametag size={40} />,
    title:"Engraving",
    desc:"Adding personalised names, dates, or messages to jewellery pieces.",
  },
];
const Services = () => {
  return (
    <section id="services" className="py-16 px-6 md:px-14 bg-[#f5eee6">
        <h2 className="text-3xl font-bold text-center text-[#6b4226] mb-4">Our Services </h2>
        <p className="text-center text-[#8d674a] max-w-xl mx-auto mb-12">
          We offer a wide range of jewellery services including custom designs, repairs, and appraisals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {jewelleryServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-[#e0d3c0]">
                <div className="text-[#A0522D] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#6B4226] mb-2">{service.title}</h3>
                <p className="text-[#5c4433]">{service.desc}</p>
          </div>
            ))}
          </div>
    </section>
  );
};

export default Services;
