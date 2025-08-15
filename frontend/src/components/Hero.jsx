import React from 'react'
import img from '../assets/hero.jpg'

function Hero() {
  return (
    <section className=" bg-[#fff9f6] py-20 px-20 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-50 justify-items-top"
           style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> 
        {/*left content*/}
        <div className="flex-1">
            <p className="text-sm text-[#333] font-medium mb-2 border-1-4 border-[#333] pl-2">
                Have a golden future-Golden Dreams
                </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#lelele]">
                Your <span className="text-[#ff7d4e]">Gold</span> Deserves <br /> The Best Family.</h1>
            <div className="mt-8 flex gap-4">
                <button className="bg-[#ff7d4e] text-white px-3.5px md:px-3 py-3 rounded-lg font-semibold shadow hover:bg-[#e46637] transition">
                    Make a Reservation
                </button>
                <button className="bg-[#daa06d] text-white px-3.5px md:px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#333] transition">
                    About More
                </button><br />
            </div><br />
        </div>
    </section>
  )
}

export default Hero
