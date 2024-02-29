import React, { useEffect } from 'react';
import '../css/NavBar.css';

function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <body>
      <header>
      
        <ul>
          <li className='hover'><a href='#'>Login</a></li>
          
          <li className='hover'><a href='#'>Buy</a></li>
          
          <li className='hover'><a href='#'>Contact</a></li>
          
          <li className='hover'><a href='#'>FAQ</a></li>
        </ul>
      </header>
    </body>
  );
}

export default NavBar;
