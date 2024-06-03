import React from 'react';
import './AboutSaffron.css';
import {videos, images
} from '../../constants'

const Saffron = () => {
  return (
    <div className="saffron-container">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={videos.v4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <div className="definition">
          <h1 className='defenition_head'>What is Saffron?</h1>
          <p>
            Saffron is a spice derived from the flower of Crocus sativus, commonly known as the "saffron crocus." 
            The vivid crimson stigmas and styles, called threads, are collected and dried for use mainly as a seasoning and coloring agent in food.
          </p>
        </div>
        <div className="why-saffron">
          <h2>Why Saffron?</h2>
          <div className="why-saffron-content">
            <img src={images.kashmirSaffron} alt="Saffron" className="saffron-image" />
            <p>
              Saffron is known for its unique flavor, aroma, and numerous health benefits. It is one of the most expensive spices in the world due to its labor-intensive harvesting process. Here are some reasons to choose saffron:
            </p>
          </div>
        </div>
        <div className="uses">
          <h2>Uses of Saffron</h2>
          <ul>
            <li>Enhances the flavor and color of dishes.</li>
            <li>Used in traditional medicines for its antioxidant properties.</li>
            <li>Improves mood and may help with depression.</li>
            <li>Promotes better digestion and appetite control.</li>
            <li>Used in beauty treatments for glowing skin.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Saffron;
