import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Remove a recipe from favorites
  const removeFavorite = (idMeal) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.idMeal !== idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return ( 
    <div className='bg-[#FFF5E1] min-h-screen' >
    <div className="p-6"> 
    <div className='flex flex-col space-y-4 justify-center items-center'> 
        <div className='max-w-3xl'>
           <h1 className="text-2xl font-bold mb-4 text-red-500 text-center">Your Personal Recipe Collection!</h1> 
           <p className='font-poppins'>Welcome to your <span className='text-orange-500 italic'>Favorites</span>—a handpicked selection of mouthwatering recipes just for you! 🌟 Whether it's a comforting classic or an exciting new dish, your saved recipes are here whenever you need a dash of inspiration. Keep adding, keep exploring, and most importantly—keep cooking delicious meals! 🍳✨</p> 
      </div>
      </div>
      {favorites.length === 0 ? (
        <p className='font-roboto text-center italic p-4'>No favorite recipes added yet.</p>
      ) : (
        <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
          {favorites.map((recipe) => (
            <div key={recipe.idMeal} className="border p-4 rounded shadow">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full object-cover rounded-full"
              />
              <h2 className="text-lg font-bold mt-2">{recipe.strMeal}</h2>
              <button
                className="mt-2 p-2 bg-red-500 text-white rounded"
                onClick={() => removeFavorite(recipe.idMeal)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div> 
    </div>
  );
};

export default Favorites;
