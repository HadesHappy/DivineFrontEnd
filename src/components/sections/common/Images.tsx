import React, { useState, useEffect } from 'react';// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

import bgImage1 from '../../assets/background/1.jpg';
import bgImage2 from '../../assets/background/2.jpg';
import bgImage3 from '../../assets/background/3.png';
import bgImage4 from '../../assets/background/4.jpg';
import bgImage5 from '../../assets/background/5.jpg';

const Images = () => {
  const [bgImage, setBgImage] = useState<string>(bgImage1);
  const backgrounds: string[] = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

  let index: number = 0;
  const changeBackground = () => {
    index = (index + 1) % 5;
    setBgImage(backgrounds[index]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackground()
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundImage: `url(${bgImage}`, backgroundSize: '100% 100%', minHeight: '150px' }} className="rounded-3xl duration-300 transition-timing-function: linear;">
    </div>
  )
}

export default Images;