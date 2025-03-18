import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Column 1 - Brand Info */}
        <div className="col-span-2">
          <h2 className="text-3xl font-bold text-white">InvestEase</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your one-stop solution for seamless investing. Grow your wealth with confidence and ease.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedinIn size={20} /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-red-500 transition"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#help" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
            <li><a href="#feedback" className="hover:text-white transition">Feedback</a></li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">Get the latest updates and market insights delivered to your inbox.</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="px-3 py-2 text-gray-900 rounded-l-md w-full focus:outline-none" />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-r-md hover:bg-blue-700 transition">Subscribe</button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} InvestEase. All rights reserved. | 
        <a href="#privacy" className="hover:text-white ml-2">Privacy Policy</a> | 
        <a href="#terms" className="hover:text-white ml-2">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
