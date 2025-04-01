import { Facebook, Instagram, Github, Linkedin } from "lucide-react"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
       <p className="font-bold font-poppins text-white">Quick Links</p>
        
        {/* Social Icons */}
        <div className=" flex flex-col space-y-4 justify-center items-center">   
            <div className="flex flex-row space-x-3">
             <li className="cursor-pointer hover:text-gray-200"><Link to='/about'>About</Link></li> 
             <li className="cursor-pointer hover:text-gray-200"><Link to='/contact'>Contact</Link></li> 
             <li className="cursor-pointer hover:text-gray-200"><Link to='/privacy'>PrivacyPolicy</Link></li> 
         </div> 
         <div className="flex flex-row space-x-3">
          <a href="https://github.com/GinnyTanui" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-gray-400 transition" />
          </a>
          <a href="https://www.instagram.com/ginnycodesit?igsh=dDcyZ3k3Zms4Njdi" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-gray-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/ginny-tanui-5228162b5" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-gray-400 transition" />
          </a> 
          </div>
        </div> 
        <p className="text-sm mb-3 p-3">© {new Date().getFullYear()} Created by Ginny. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
