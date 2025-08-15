import React from 'react'
import img from "../assets/about.jpg"

const AboutUs = () => {
  return (
    <section id="about"className="bg-[#fdf7f2] py-20 px-20 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Text Section*/}
            <div className="flex-1">
                <h2 className="text-4xl font-bold text-[#5a3b1f] mb-6">About Jewel X</h2>
                <p className="text-[#6b4a2e] text-lg leading-relaxed mb-4">
                    <span className="font-semibold">Jewel X </span> began as a dream to redefine luxury jewelry. Founded in 2010,
                     we started our journey with a simple belief: every piece of jewelry should tell a story, 
                     celebrate a moment, and reflect the unique beauty of its wearer
                </p><br />
                <p className="text-[#6b4a2e] text-lg leading-relaxed mb-4">
                    What started as a small family business has grown into a trusted name in the jewelry industry,
                     serving over 10 million satisfied customers worldwide. 
                     Yet, despite our growth, we've never forgotten our core values - exceptional craftsmanship, personalized service, and creating jewelry that captures life's most precious moments.
                </p>
            </div> 
            {/* image section*/}
            <div className="flex-1">
                <img src={img} alt="image02" className=" w-full rounded-2xl border border-[#e8d7c8] bg-white h-150"/>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;
