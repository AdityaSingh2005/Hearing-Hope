import styles from '../styles/index.module.css';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const IndexProducts = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Wrap the initialization of 'certificationsData' in useMemo
  const certificationsData = useMemo(
    () => [
      { id: 1, imgeUrl: '/Products/BestSeller.png', description: 'Silk Rechargeable IX' },
      { id: 2, imgeUrl: '/Products/SilkNxCouple.png', description: 'Silk Nx Couple' },
      { id: 3, imgeUrl: '/Products/Motion CnG SP X.png', description: 'Motion CnG SP X' },
      { id: 4, imgeUrl: '/Products/Styletto RIC.png', description: 'Styletto RIC' },
      { id: 5, imgeUrl: '/Products/Pure312X.png', description: 'Pure 312X' },
      { id: 6, imgeUrl: '/Products/X Charger Styletto.png', description: 'X Charger Styletto' },
      { id: 7, imgeUrl: '/Products/Product2.png', description: 'Kit Pure Charge & Go 1AX' },
      { id: 8, imgeUrl: '/Products/InsioCharge&GoAX.png', description: 'Kit Insio Charge & Go AX' },
      { id: 9, imgeUrl: '/Products/ActivePro.png', description: 'Kit Active Pro' },
      { id: 10, imgeUrl: '/Products/BTEmotionCharge.png', description: 'Kit BTE Motion Charge & Go SP 1X' },
      { id: 11, imgeUrl: '/Products/Styletto.png', description: 'Styletto AX' },
      { id: 12, imgeUrl: '/Products/PureCharge&GoAX.png', description: 'Kit Pure Charge & Go AX' },
    ],
    []
  );

  useEffect(() => {
    const handleAutomaticScroll = (direction) => {
      const nextSlide = (currentSlide + 1) % certificationsData.length;
      setCurrentSlide(nextSlide);
      const scrollPosition = nextSlide * 320; // Adjust based on the width of the products

      // Use scrollTo with behavior: 'smooth' for smooth scrolling
      carouselRef.current?.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(() => {
      handleAutomaticScroll('right');
    }, 7000); // Adjust the duration for automatic scrolling

    return () => clearInterval(interval);
  }, [currentSlide, certificationsData]);

  const handleManualNavigation = (index) => {
    setCurrentSlide(index);
    const scrollPosition = index * 320; // Adjust based on the width of the products

    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.ProductcarouselContainer}>
      <h1 style={{ color: '#ff6600', fontSize: '45px' }}>Our Products</h1>
      <div className={styles.carousel} ref={carouselRef} onWheel={handleWheel}>
        {certificationsData.map((certification, index) => (
          <div
            key={certification.id}
            className={styles.certificationItem}
            onClick={() => handleManualNavigation(index)}
          >
            <Image
              src={certification.imgeUrl}
              alt={`Certification ${certification.id}`}
              width={350} // Adjust the width
              height={300} // Adjust the height
            />
            <p className={styles.ProductsName}>{certification.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {certificationsData.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? styles.activeDot : styles.dot}
            onClick={() => handleManualNavigation(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default IndexProducts;
