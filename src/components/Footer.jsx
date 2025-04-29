import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6 md:px-16 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">JobBox</h2>
          <p className="mt-2 text-sm">
            JobBox is the heart of the design community and the best resource to
            discover and connect with designers and jobs worldwide.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-blue-600 cursor-pointer" size={20} />
            <FaTwitter className="text-blue-400 cursor-pointer" size={20} />
            <FaLinkedinIn className="text-blue-700 cursor-pointer" size={20} />
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="font-semibold text-gray-900">Resources</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>About us</li>
            <li>Our Team</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Community</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Feature</li>
            <li>Pricing</li>
            <li>Credit</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>iOS</li>
            <li>Android</li>
            <li>Microsoft</li>
            <li>Desktop</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Download App</h3>
          <p className="mt-2 text-sm">
            Download our Apps and get extra 15% Discount on your first Order...!
          </p>
          <div className="flex space-x-2 mt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto border-t mt-6 pt-4 text-sm text-center md:flex md:justify-between">
        <p>Copyright © 2022. JobBox all rights reserved</p>
        <div className="flex justify-center space-x-4">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
