import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function LocationURL({ setSelectedId }) {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      default:
        setSelectedId(-1);
        break;

      case '/html':
        setSelectedId(0);
        break;
      case '/css':
        setSelectedId(1);
        break;
      case '/javascript':
        setSelectedId(2);
        break;
      case '/react':
        setSelectedId(3);
        break;
      case '/sanity':
        setSelectedId(4);
        break;
    }
  }, [location.pathname, setSelectedId]);
  /*Brukte denne for å finne en metode for å gjøre at når man skriver
  path i URL så kommer opp innholdet. https://stackoverflow.com/questions/69829362/url-checker-with-includes
  Deretter brukte jeg denne for å strukturere useEffect funksjonen
  https://stackoverflow.com/questions/48477037/how-to-use-switch-cases-inside-jsx-reactjs*/ 
  return null;
}

export default LocationURL;