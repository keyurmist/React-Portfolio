import React from "react";
import { FaBars, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/keyurmist",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/keyur-mistry-15a303235",
  },
  {
    id: 3,
    icon: <FaFacebook />,
    url: "https://facebook.com/keyur.mistry.568",
  },
];

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className=" sm:pt-30 pb-2 mt-8 ">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-8">
          <p className="text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-4">
            Follow me
          </p>
          <ul className="flex gap-2 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
