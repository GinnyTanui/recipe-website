import React from 'react'

const PrivacyPage = () =>  {
  return (
    <div className="py-8 px-4 md:px-12 lg:px-20">
        <div className='flex flex-col space-y-6 justify-center items-center text-gray-800'> 
            <div className='max-w-3xl w-full'>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-red-500 text-center">Terms and Privacy Policy</h1> 
                <p className="text-base md:text-lg leading-relaxed">Welcome to Ginny's Kitchen! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.</p> 
                
                <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-red-500 text-center">Information We Collect</h2> 
                <p className="text-base md:text-lg">We may collect the following information:</p> 
                <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-semibold">Personal Information:</span> Name, email address, and any other details you provide when contacting us.</li> 
                    <li><span className="font-semibold">Cookies & Tracking Technologies:</span> We use cookies to enhance your experience and analyze site traffic.</li> 
                </ul>
                
                <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-red-500 text-center">How We Use Your Information</h2> 
                <p className="text-base md:text-lg">We use your information to:</p> 
                <ul className="list-disc list-inside space-y-2">
                    <li>Provide and improve our services.</li> 
                    <li>Respond to your inquiries or requests.</li> 
                    <li>Personalize your experience on our website.</li> 
                    <li>Analyze website performance and user behavior.</li> 
                </ul>
                
                <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-red-500 text-center">How We Protect Your Information</h2>  
                <p className="text-base md:text-lg leading-relaxed">We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p> 
                
                <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-red-500 text-center">Third-Party Services</h2>  
                <p className="text-base md:text-lg leading-relaxed">We may use third-party services (e.g., analytics, payment processors) that have their own privacy policies. We encourage you to review their policies before providing your data.</p>  
                
                <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-red-500 text-center">Your Rights & Choices</h2>  
                <p className="text-base md:text-lg">You have the right to:</p> 
                <ul className="list-disc list-inside space-y-2">
                    <li>Request access to the personal data we hold about you.</li> 
                    <li>Request correction or deletion of your data.</li> 
                    <li>Opt out of receiving marketing communications.</li> 
                </ul>
                
                <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-red-500 text-center">Changes to This Policy</h2>  
                <p className="text-base md:text-lg leading-relaxed">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p> 
                
                <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-red-500 text-center">Contact Us</h2> 
                <p className="text-base md:text-lg">If you have any questions about this Privacy Policy, feel free to contact us at:</p>
                <p className="text-base md:text-lg mt-2"><span className='font-semibold'>Email:</span> chemutaiginny@gmail.com</p> 
                <p className="text-base md:text-lg"><span className='font-semibold'>Location:</span> Magadi Road, Kenya MultiMedia University</p>
            </div>
        </div>
    </div>
  )
}

export default PrivacyPage;
