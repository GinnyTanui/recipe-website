import React from 'react'

const About = () => {
    return(
        <div>
           <div className= " border bg-gradient-to-r from-orange-500 to-pink-500 w-full h-28 md:h-26 lg:h-28"> 
              <div className='flex justify-center items-center py-6'> 
                <p className='text-white font-bold font-poppins italic text-3xl'>Where Every Recipe Becomes a Masterpiece!</p>
              </div>
             <div>
             </div>
           </div> 
           <div>
             <div>
            <div className="bg-[#FFF5E1] min-h-screen"> 
                <div className='flex justify-center items-center px-4 py-4'>
                  <div className='max-w-6xl'>
                      <p className='font-roboto text-lg'>Welcome to <span className='text-orange-500 font-roboto italic'>Ginny's Kitchen</span>, where cooking is more than just a task—it is an experience! Whether you are a home cook or a seasoned chef, our platform brings you irresistible recipes, expert cooking tips, and step-by-step guides to help you create mouthwatering dishes with ease. Let us turn everyday ingredients into unforgettable meals!</p>
                  </div> 
                </div> 
                <div className='flex justify-center items-center pt-5'>
                    <p className='font-bold text-2xl font-poppins '>What Makes Us Unique?</p>
                </div> 
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-6 py-12 px-8'> 
                {/* Boxes  */}  
                <div className="bg-white p-6 rounded-xl shadow-md border border-orange-300 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-orange-600 font-poppins p-3">✅ Bursting with Flavor</h3>
                          <p className="font-roboto font-medium text-gray-900 mt-2">
                            From comforting classics to bold new flavors, our recipes are designed to excite your taste buds and elevate your cooking!
                             </p>
                 </div> 
                 <div className="bg-white p-6 rounded-xl shadow-md border border-orange-300 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-orange-600 font-poppins p-3">✅ Easy to Make</h3>
                          <p className="font-roboto font-medium text-gray-900 mt-2">
                          Simple, beginner-friendly recipes with step-by-step instructions. No fancy tools needed—just great ingredients and easy techniques!
                             </p>
                 </div> 
                 <div className="bg-white p-6 rounded-xl shadow-md border border-orange-300 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-orange-600 font-poppins p-3">✅ For Everyone</h3>
                          <p className="font-roboto font-medium text-gray-900 mt-2">
                          Quick meals, gourmet creations, and healthy alternatives—there is something for every taste, skill level, and lifestyle.
                             </p>
                 </div> 
                 <div className="bg-white p-6 rounded-xl shadow-md border border-orange-300 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-orange-600 font-poppins p-3">✅ Community-Driven</h3>
                          <p className="font-roboto font-medium text-gray-900 mt-2">
                          Connect with fellow food lovers, share your recipes, and be part of a vibrant cooking community!
                             </p>
                 </div>


             </div> 
             <div className='py-6'>
                <div className='flex justify-center items-center'>
                    <p className='font-bold font-poppins text-red-400 text-2xl'>What You Can Expect</p>
                </div> 
                <div className='px-6 py-4 flex flex-col space-y-3 justify-center items-center'>
                   
                        <li className='text-lg font-roboto'>🍽️ A wide variety of delicious recipes from <span className='italic text-red-400'>quick bites</span> to restaurant-quality meals</li> 
                        <li className='text-lg font-roboto'>📝 Step-by-step instructions & cooking techniques to boost your confidence</li> 
                        <li className='text-lg font-roboto' >🌍 Global flavors - Discover dishes from different cuisines & cultures</li> 
                        <li className='text-lg font-roboto'>💡 Expert cooking hacks & pro tips to elevate your skills</li>
                
                </div>
             </div>
             </div> 
            
             </div>  
             
            
           </div>
        </div>
    )
} 
export default About 
