import { FaChevronUp,FaChevronDown} from 'react-icons/fa';
import React, {useState} from 'react';


const faqs = [
    {
        question: "What types of jewellery do you offer?",
        answer: "At Jewel X, we specialize in creating exquisite jewelry pieces that celebrate life's most precious moments. From engagement rings to custom designs, our master craftsmen use only the finest materials including certified diamonds, precious gemstones, and high-quality metals to ensure every piece meets our exceptional standards.",
    },
    {
        question: "How can I customize my jewellery?",
        answer: "We offer a wide range of customization options, including selecting the type of metal, gemstones, and design elements. Our team works closely with you to create a piece that reflects your personal style and story.",
    },
    {
        question: "Do you provide jewellery repair services?",
        answer: "Yes, we offer comprehensive jewellery repair services. Whether it's resizing rings, fixing clasps, or restoring antique pieces, our skilled artisans ensure your jewelry is restored to its original beauty.",
    },
    {
        question : "Are your diamonds certified?",
        answer: "All our diamonds are certified and conflict-free, sourced from ethical suppliers worldwide.",
    },
];

const  FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="bg-[#f8f1ea] py-20 px-6 md:px-14">
            <h2 className="text-4xl font-bold text-center text-[#5a3b1f] mb-4">
                Frequently Asked Questions</h2>
            <p className="text-center text-[#7c5a3b] max-w-2xl mx-auto mb-12 text-[17px]">
                At Jewel X, we specialize in creating exquisite jewelry pieces that celebrate life's most precious moments.
            </p>  
        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq,index) => (
                <div key= {index} className="bg-white rounded-xl border border-[#e2d2c3] shadow-sm">
                    <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center px-6 py-4 text-left text-[#5a3b1f] font-semibold text-lg hover:bg-[#f0e4d8] transition">
                        {faq.question}
                        <span>
                            {openIndex === index ?(
                                <FaChevronUp size={18} />
                            ):(
                                <FaChevronDown size={18} />
                            )}
                        </span>
                    </button>
                    {openIndex === index && <div className="px-6 pb-4 text-[#6d4a30] text-sm">
                        {faq.answer}</div>}
                </div>
            ))}
        </div>
        </section>
    );
};

export default FAQs;
