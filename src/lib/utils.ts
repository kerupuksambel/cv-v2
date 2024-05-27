export const scrollToID = (id: string) => {
  const elem = document.getElementById(id)
  if(elem){
    const elementPosition = elem.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    // elem.scrollIntoView({behavior: 'smooth'})
  }
}

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}



export const substrWords = (string: string, charCount: number, ellipsis = '...') => {
  var trimmedString = string.substring(0, charCount)
  return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + ((string.length > trimmedString.length) ? ellipsis : "")
}