import React from 'react'
import { motion } from 'framer-motion'  
import Recipe from '../images/Frame 3.png'

const Hero = () => {
  return (
    <div className="bg-[#FFF5E1] min-h-screen flex items-center justify-center px-12 py-10">
      {/* Container with Flexbox */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Left Section - Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="font-poppins text-3xl md:text-4xl font-extrabold italic">
            From Kitchen to Masterpiece: Discover the Art of Irresistible Recipes!
          </h1>

          <p className="font-poppins"> 
          Step into a world where every meal is a celebration and every recipe is a masterpiece! 
         Whether you're a home cook or a seasoned chef, our carefully curated recipes will help you create 
        mouthwatering dishes with ease. Explore rich flavors, expert tips, and step-by-step instructions to 
        transform simple ingredients into extraordinary meals. Let's cook, create, and savor every bite together!
        
          </p>

          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white uppercase tracking-wider font-bold px-8 py-4 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
            Explore Recipes
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src={Recipe} 
            alt="Delicious dish" 
        
          />
        </div>

      </div>
    </div>
  )
}

export default Hero


