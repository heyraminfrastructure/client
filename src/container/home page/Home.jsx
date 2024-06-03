import React, { useState } from 'react';
import ProductModal from '../../components/productModal/ProductModal';
import { videos } from "../../constants";
import { data } from "../../constants";
import Navbar from '../../components/navbar/Navbar.jsx'


import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {

     const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
    <Navbar/>
      <section className="videobg" id="video1">
        <video
          src={videos.v1}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          classNameName="video"
        ></video>
        <h2>Z Princess Saffron</h2>
        <button>About Us</button>
      </section>

      <section className="videobg" id="video2">
        <video
          src={videos.v2}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          classNameName="video"
        ></video>
        <h2>What is Saffron</h2>
        <button><Link to='/saffron'>Study more</Link></button>
      </section>

      <section className="videobg" id="video3">
        <video
          src={videos.v6}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          classNameName="video"
        ></video>
        <h2>Saffronization</h2>
        <button>Discover more</button>
      </section>

      {/* <section className="imagebg" id="image1">
        <video src="assets/Hero Pages/v7.mp4" type="video/mp4" autoplay loop muted plays-inline className="video" ></video>
        <h2 id="h2-1-imagebg">Saffronation</h2>
       
        <button>Discover the Collections</button>
    </section>

    <section className="videobg" id="video4">
        <video src="assets/Hero Pages/v4.mp4" type="video/mp4" autoplay loop muted plays-inline className="video" ></video>
        <h2>Lorel ipsum</h2>
        <button>Discover Button</button>
    </section>

    <section className="videobg" id="video5">
        <video src="assets/Hero Pages/v6.mp4" type="video/mp4" autoplay loop muted plays-inline className="video" ></video>
        <h2>Lorel ipsum</h2>
        <button>Discover Button</button>
    </section> */}

      <section className="services">
      <h2>Products</h2>
      <div className="grid">
        {data.products.map((item) => (
          <div className="grid-item" key={item.id}>
            <div className="card" onClick={() => handleProductClick(item)}>
              <img className="card-image" src={item.imgUrl} alt={item.title} />
              <div className="card-content">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button className="card-btn-amt">{item.price}</button>
                <button className="card-btn">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} closeModal={closeModal} />}
    </section>


    <section className="links">
        <hr className="hr"/>
        <div className="container">
            <div className="column">
              <div className="cell cell-head">HELP</div>
              <div className="cell"><a href="#" className="links">You can <span>call</span> or <span>email us</span>.</a></div>
              <div className="cell"><a href="#" className="links">FAQ's</a></div>
              <div className="cell"><a href="#" className="links">Product Care</a></div>
              <div className="cell"><a href="#" className="links">Stores</a></div>
            </div>
            <div className="column">
              <div className="cell cell-head">ABOUT Z PRINCESS</div>
              <div className="cell"><a href="#" className="links">About Saffron</a></div>
              <div className="cell"><a href="#" className="links">Our Products</a></div>
              <div className="cell"><a href="#" className="links">Testimonials</a></div>
              <div className="cell"><a href="#" className="links">Blog</a></div>
            </div>
            <div className="column">
              <div className="cell cell-head">SERVICES</div>
              <div className="cell"><a href="#" className="links">Repairs</a></div>
              <div className="cell"><a href="#" className="links">Personalization</a></div>
              <div className="cell"><a href="#" className="links">Art of Gifting</a></div>
            </div>
            
            <div className="column">
              <div className="cell cell-head">CONNECT</div>
              <div className="cell"><a href="#" className="links"><span>Sign up</span> fo first access to latest collections, campaigns and videos.</a></div>
              <div className="cell"><a href="#" className="links">Follow Us</a></div>
            </div>
            </div>
    </section>

    <hr className="hr"/>

    <footer className="footer">
        
        <a href="#" className='language'><i className="fa-solid fa-globe globe-icon" ></i><span>ENGLISH (INTL)</span></a>
        <ul>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Legal & privacy</a></li>
            <li><a href="#">Cookies</a></li>
        </ul>
    </footer>

    <div className="last-logo">Z Princess Saffron</div>
    </>
  );
};

export default Home;
