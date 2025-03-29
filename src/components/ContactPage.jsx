import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send Message 🚀"); // Default button text
  const [isClicked, setIsClicked] = useState(false); // Prevent multiple clicks

  const handleClick = () => {
    if (isClicked) return; // Prevent multiple clicks

    setButtonText("Sent Successfully! 🎉");
    setIsClicked(true);

    // Clear input fields
    setName("");
    setEmail("");
    setMessage("");

    // Reset button after 3 seconds
    setTimeout(() => {
      setButtonText("Send Message 🚀");
      setIsClicked(false);
    }, 5000);
  };

  return (
    <div className="bg-[#FFF5E1] min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 shadow-lg rounded-2xl max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4 font-poppins">
          Get in Touch! 📩
        </h2>
        <p className="text-gray-600 text-center mb-6 font-poppins">
          Have a question or just want to share your love for great food? Send us a message below!
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              placeholder="Type your message here..."
              className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400 h-32 resize-none" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
            ></textarea>
          </div>

          <button  
          type="submit"
            className={`w-full ${
              isClicked ? "bg-green-500" : "bg-gradient-to-r from-orange-400 to-red-500"
            } text-white font-bold uppercase tracking-wider py-3 rounded-full shadow-md transition-transform duration-300 ${
              !isClicked && "hover:scale-105 hover:shadow-lg"
            }`} 
            onClick={handleClick}
            disabled={isClicked} // Disable button after clicking
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
