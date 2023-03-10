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
  /*Bruker useLocation hook som henter inn info fra URL. Bruker useEffect som kjører logikken hver gang location eller 
  setSelectedId endres. setSelectedId er brukt som en prop og kjører den valgte Id basert på URL. Dette skjes via switch-metoden
  som endrer på den valgte Id via URL. Hvis URL ikke viser til noen valid Id, så er default på setSelectedId -1 og ingenting
  vil vises på UI. Årsaken til at vi har return null til slutt kommer fra at komponente i seg selv ikke rendrer noe på skjermen,
  og er hensiktsmessig brukt bare for å oppdatere UI via URL. 

  Brukte denne for å finne en metode for å gjøre at når man skriver
  path i URL så kommer opp innholdet. https://stackoverflow.com/questions/69829362/url-checker-with-includes
  Deretter brukte jeg denne for å strukturere useEffect funksjonen
  https://stackoverflow.com/questions/48477037/how-to-use-switch-cases-inside-jsx-reactjs*/ 
  return null;
}

export default LocationURL;