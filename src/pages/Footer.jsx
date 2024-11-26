import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {

    return (

<footer className="bg-darkBlue text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="max-w-28 ml-10">
        <img src="../src/assets/shrinkit.png" alt="logo" />
      </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Features</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">Link Shortening</a></li>
            <li><a href="#" className="hover:text-primary">Branded Links</a></li>
            <li><a href="#" className="hover:text-primary">Analytics</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">Blog</a></li>
            <li><a href="#" className="hover:text-primary">Developers</a></li>
            <li><a href="#" className="hover:text-primary">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">About</a></li>
            <li><a href="#" className="hover:text-primary">Our Team</a></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-8">
          <a
            href="#"
            className="text-xl hover:text-primary transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-xl hover:text-primary transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-xl hover:text-primary transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
    </footer>
    );
}

export default Footer;