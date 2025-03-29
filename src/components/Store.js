import { useQuery } from "@tanstack/react-query";  
import axios from "axios";
const obtainRecipes = async(searchQuery ) => { 
    try{
           const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}` 
           const {data} = await axios.get(url) 
           return data.meals || []
    }catch(error){
        console.log("Error fetching recipes")
    }
   
} 
const useFetchRecipes = (searchQuery) => { 
    return useQuery({
        queryKey: ["recipes", searchQuery], 
        queryFn: () =>obtainRecipes(searchQuery), 
        enabled: !!searchQuery
    })

} 
export default useFetchRecipes