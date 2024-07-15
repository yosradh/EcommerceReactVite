import React from 'react'
import './FooterStyle.css'
import { AiTwotoneUpCircle } from "react-icons/ai";

export default function FooterPage() { // Renommé pour suivre les conventions de React
  const date = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="FooterPage">
      <AiTwotoneUpCircle className="flesheC" onClick={scrollToTop} />

      <div className="footer">
        Powered and designed by <a href="https://www.linkedin.com/in/yosra-dhibi" target="_blank" rel="noopener noreferrer">Yosra Dhibi</a> @{date}
      </div>
    </div>
  );
}
