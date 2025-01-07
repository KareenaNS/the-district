import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [location]);

  return null;
}

export default ScrollToTop;
