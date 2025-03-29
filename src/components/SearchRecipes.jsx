import React, {useState, useEffect} from 'react'
import useFetchRecipes from './Store'

const  SearchRecipes = () =>  { 
    const [searchQuery, setSearchQuery] = useState("") 
    const [query, setQuery] = useState("")
    const {data: recipes, isLoading , error} = useFetchRecipes(query)
    const [favoriteIds, setFavoriteIds] = useState(new Set()) 
    //loading recipe favorites when the page loads 
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [] 
        setFavoriteIds(new Set(storedFavorites.map((recipes) => recipes.idMeal)))
    }, []) ;
    //ensures when you refresh the page the UI remembers what recpes were marked as favorites  
    //ni kama added haitapersist, remember, we tried , yes that one

    //adding to favorites 
   const toggleFavorite = (recipe) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [] 
    if(favoriteIds.has(recipe.idMeal)){
        //remove 
        favorites = favorites.filter((fav) => fav.idMeal !== recipe.idMeal); 
        alert("Your Recipe has been removed from favorites!")
    }else{
        //add to favorites 
        favorites.push(recipe) 
        alert("Your recipe has been added to favorites!😚")
    } 
    //update local storage 
    localStorage.setItem("favorites", JSON.stringify(favorites))  
    //update state to reflect the change
    setFavoriteIds(new Set(favorites.map((fav) => fav.idMeal)))
   }
  
  return (
    <div>
        <div className='bg-white min-h-screen'> 
            <div className='flex  flex-col space-y-4 justify-center items-center text-center pt-6'>  
                 <p className='font-bold text-orange-600 italic text-3xl'>Search For Recipes</p> 
                 <p className='font-roboto text-lg'>Curious about a specific recipe?😕Worry no more! Key in your recipe name and get everything you need🥰</p> 
                 <div className="p-6">
                   {/* Search Bar */}
                     <div className="flex flex-col md:flex-row items-center gap-4"> 
                        <input 
                             type="text" 
                            name="text"
                           value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)}
                         className="w-full md:w-auto px-6 py-3 border-2 border-orange-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                           placeholder="Enter recipe name..."
                        />
                   <button 
                 className="py-3 px-6 bg-orange-600 text-white rounded-3xl w-full md:w-auto"
                onClick={() => setQuery(searchQuery)}
                    >
                  Search
                      </button>    
              </div> 

                  {isLoading && (<p className='font-roboto text-lg  p-3'>Loading recipes...</p>)} 
                     {error && ( <p className='font-roboto text-lg  p-3 '>Error fetching recipes...</p>)
                     }
            </div> 
            </div> 
           
             {/* Displaying Recipes */} 
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 py-6'> 
                {recipes?.map((recipe) => {
                     const isFavorite = favoriteIds.has(recipe.idMeal); // 
                     return(
                        <div key={recipe.idMeal} className=' bg-white border rounded-lg  border-orange-500 shadow-md hover:shadow-lg  px-5 py-6'> 
                          <img src={recipe.strMealThumb} alt='image' className='w-full  object cover rounded-full'/> 
                          <h3 className='text-xl font-poppins text-orange-400 p-2'>{recipe.strMeal}</h3> 
                           {/* Ingredients List */}
      <h3 className="text-2xl font-semibold mt-4 font-poppins">Ingredients:</h3>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {Array.from({ length: 20 }).map((_, index) => {
          const ingredient = recipe[`strIngredient${index + 1}`];
          const measure = recipe[`strMeasure${index + 1}`];
          return (
            ingredient && (
              <li key={index} className='font-roboto font-medium'>
                {measure} {ingredient}
              </li>
            )
          );
        })}
      </ul>

      {/* Instructions */}
      <h3 className="text-2xl font-semibold mt-4">Instructions:</h3>
      <p className="text-gray-700 leading-relaxed">{recipe.strInstructions}</p> 
      <div className='py-3'>
    <button className={`mt-2 p-2 rounded ${
        favoriteIds.has(recipe.idMeal) ? "bg-red-500 text-white": "bg-orange-600 text-white"
    }`} 
    onClick={() => toggleFavorite(recipe)}>  
    {favoriteIds.has(recipe.idMeal) ? "Remove from Favorites" : "Add to Favorites"}

        </button> 
              </div>
    </div>
                     )
                }

                )}

             </div>
        </div>
        </div>

  )
}

export default SearchRecipes