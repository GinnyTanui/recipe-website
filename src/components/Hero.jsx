import React from 'react' 
import Recipe from '../images/Frame 3.png' 
import { useNavigate} from 'react-router-dom'

const Hero = () => { 
    const navigate = useNavigate()
  return (
    <div className="bg-[#FFF5E1] min-h-screen flex items-center justify-center px-12 py-10">
      {/* Container with Flexbox */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Left Section - Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="font-poppins text-3xl md:text-4xl font-extrabold italic text-red-400">
            From Kitchen to Masterpiece: Discover the Art of Irresistible Recipes!
          </h1>

          <p className="font-roboto"> 
           Every meal is a celebration!Whether you are a home cook or a seasoned chef, our curated recipes make cooking efortless.Discover rich flavors, expert tips and step-by-step guides to transform simple ingredients into extra-ordinary dishes.Let us cook, create and savor every bite!
        
          </p>

          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white uppercase tracking-wider font-bold px-8 py-4 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 pt-4" 
          onClick={() => navigate('/search')}>
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


