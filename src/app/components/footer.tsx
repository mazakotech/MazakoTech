import React from "react";
import { FiInstagram } from "react-icons/fi";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineBehance,
  AiOutlineGithub,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-center text-white p-4 font-sans">
      <h3>
        Connect with us and take your first steps to turn your dreams into
        reality
      </h3>
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center gap-2">
          <Link href="https://www.instagram.com/mazakotech/">
            <FiInstagram className="text-3xl text-red-600" />
          </Link>
          <Link href="https://www.linkedin.com/company/mazako-tech">
            <AiOutlineLinkedin className="text-3xl text-red-600" />
          </Link>
          <a href="mailto:mazakotech@gmail.com">
            <AiOutlineMail className="text-3xl text-red-600" />
          </a>
          <Link href="https://www.behance.net/mazakotech">
            <AiOutlineBehance className="text-3xl text-red-600" />
          </Link>
          <Link href="https://github.com/mazakotech">
            {" "}
            <AiOutlineGithub className="text-3xl text-red-600" />
          </Link>
        </div>
      </div>

      <div className="p-4 text-center">© 2023 Copyright: MazakoTech</div>
    </footer>
  );
};

export default Footer;
