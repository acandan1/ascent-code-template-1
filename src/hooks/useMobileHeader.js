import { useEffect, useState } from 'react';

const useMobileHeader = (thresholdWidth = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= thresholdWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= thresholdWidth);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [thresholdWidth]);

  return isMobile;
};

export default useMobileHeader;
