
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom' 
import Navbar from './components/Navbar' 
import About from './components/About' 
import Hero from './components/Hero'  
import AboutPage from './components/AboutPage'  
import SearchRecipes from './components/SearchRecipes'   
import SearchRecipesDisplay from './components/SearchRecipesPage'
import Favorites from './components/Favorites'
import Footer from './components/Footer' 
import Contact from './components/Contact' 
import ContactPage from './components/ContactPage' 
import Privacy from './components/Privacy'
import PrivacyPage from './components/PrivacyPage'
function App() {

  return (
    <> 
  <Router>
    <Navbar/>   
    <Routes>
      <Route path='/' element={<>  
        <Hero />
        <About />  
        <SearchRecipes/>  
        <Contact/> 
        <Privacy/>
      </>}/> 
      <Route path='/about'  element={<AboutPage/>}/> 
      <Route path='/search' element={<SearchRecipesDisplay/>}/> 
      <Route path='/favorites' element={<Favorites/>}/> 
      <Route path='/contact'   element={<ContactPage/>}/> 
      <Route path='/privacy' element={<PrivacyPage/>}/>
    </Routes> 
    <Footer/>
  </Router>
   
        
    </>
  )
}

export default App
