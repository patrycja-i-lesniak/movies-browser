/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

export const useGetScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const getScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', getScreenWidth);

    return () => window.removeEventListener('resize', getScreenWidth);
  }, [screenWidth]);

  return screenWidth;
};
