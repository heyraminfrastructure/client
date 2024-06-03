// import React, {useEffect,useState} from 'react'
// import '../navbar/navbar.css'

// const Navbar = () => {

//     const [lastScrollTop, setLastScrollTop] = useState(0);
//     const [navStyle, setNavStyle] = useState({ top: '0px' });

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             if (scrollTop > lastScrollTop) {
//                 setNavStyle({ top: '-100px' }); // Navbar hides
//             } else {
//                 if (scrollTop === 0) {
//                     setNavStyle({ top: '0px' });
//                     document.getElementById('navbar').classList.remove('scrolled');
//                 } else {
//                     setNavStyle({ top: '0px' }); // Navbar shows
//                     document.getElementById('navbar').classList.add('scrolled');
//                 }
//             }
//             setLastScrollTop(scrollTop);
//         };

//         window.addEventListener('scroll', handleScroll);

//         // Cleanup function to remove event listener
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [lastScrollTop]);

//   return (
//     <>
//     <nav id="navbar" style={navStyle} className="navbar">

//         <ul>
//             <li><a href="#">{`+  Contact`}</a></li>
//         </ul>
//         <a href="#" className="brand">Z PRINCESS</a>
//         <ul>
//             <li><a href=""><i className="fa-solid fa-bag-shopping"></i></a></li>
//             <li><a href=""><i className='fa-regular fa-user'></i></a></li>
//             <li><a href=""><i className="fa-solid fa-bars" id="menu_icon"></i></a></li>
//             {/* <li><a href="#" className="nav-hid">Menu</a></li> */}
//         </ul>
//     </nav>
//     </>
//   )
// }

// export default Navbar

import React, { useEffect, useState, useRef } from "react";
import "../navbar/Navbar2.css";
import { data } from "../../constants";

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navStyle, setNavStyle] = useState({ top: "0px" });
  const [menuStyle, setMenuStyle] = useState({ right: "-700px" });
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setNavStyle({ top: "-100px" });
      } else {
        setNavStyle({ top: "0px" });
        document
          .getElementById("navbar")
          .classList.toggle("scrolled", scrollTop !== 0);
      }
      setLastScrollTop(scrollTop);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollTop]);

  const toggleMenu = (open, contact = false) => {
    setShowContactInfo(contact);
    setOverlayVisible(open);
    setMenuStyle({ right: open ? "0px" : "-700px" });
  };

  const handleAuthChange = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <nav id="navbar" style={navStyle} className="navbar">
        <ul>
          <li>
            <a href="#" onClick={() => toggleMenu(true, true)}>
              <span className="plus-icon"><i class="fa-solid fa-plus"></i></span> Contact
            </a>
          </li>
        </ul>
        <a href="#" className="brand">
          Z PRINCESS
        </a>
        <ul>
          <li>
            <a href="/shop">
              <i className="fa-solid fa-bag-shopping"></i>
            </a>
          </li>
          <li>
            <a href="/account">
              <i className="fa-regular fa-user"></i>
            </a>
          </li>
          <li>
            <button onClick={() => toggleMenu(true)}>
              <i className="fa-solid fa-bars" id="menu_icon"></i>
            </button>
          </li>
        </ul>
      </nav>
      <div ref={menuRef} className="menu" style={menuStyle}>
        {showContactInfo ? (
          <div className="contact-info">
            {data.contact.map((item, index) => (
              <ul key={index}>
                <li>
                  <a href="#"><i className={item.icon}></i> {item.title}</a>
                </li>
                <li className="contact-info_description">{item.description}</li>
               </ul>
            ))}
          </div>
        ) : (
          <div className="auth-and-contact">
            <ul>
            {["Home", "About", "Products", "Saffronization"].map(
              (item, index) => (
                <li key={index}  className="menu-menu">
                  <a href="#">{item}</a>
                </li>
              )
            )}
            <li className="auth">
              {isLoggedIn ? (
                <a href="#" onClick={handleAuthChange}>
                  Sign Out
                </a>
              ) : (
                <a href="#" onClick={handleAuthChange}>
                  Sign In
                </a>
              )}
              <a href="#">My Orders</a>
              <a href="#" onClick={() => toggleMenu(true, true)}>
                Contact
              </a>
            </li>
          </ul>
          </div>
        )}
        <button onClick={() => toggleMenu(false)} className="menu-close">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      {overlayVisible && (
        <div className="overlay" onClick={() => toggleMenu(false)}></div>
      )}
    </>
  );
};

export default Navbar;
