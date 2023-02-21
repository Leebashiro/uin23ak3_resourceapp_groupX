import React, { useState } from 'react';
import { Line } from './Line';
import ContentBoxes from './ConBox';
import { NavLink } from 'react-router-dom';
import LocationURL from './LocationURL';

const Nav = () => {
    const [selectedId, setSelectedId] = useState(-1);
/*Nav er definrt som en useState hook kalt selectedId og bruker setSelectedId for å oppdatere staten. Årsaken til at useState
begynner med en verdi av -1 her er fordi Id på når bokser popper opp starter ved 0, så -1 vil indikere at ingen ID
har blitt valgt enda. Funksjonen er brukt for å holde data slik at vi kan endre på UI dynamisk i realtime, det vil si å holde 
styr på hvilken navigasjonstab som er åpen*/

    const handleClick = (id) => {
        setSelectedId(id);
    };
/*Videre må vi også ha en måte å få brukt dette på. Her lager jeg en handleClick funksjon som tar id som parameter, og oppdaterer 
selectedID state-variabelen med id som verdi. Via handleClick kan vi dermed oppdatere staten, slik at navigasjonen fungerer 
som den skal*/

    return (
        <nav>
          <div id="category-box-container">
            <NavLink to="/html" style={{border: selectedId === 0 ? 'none' : '0.05px solid #bdbdbd'}} className="category-box"  tabIndex="0" onClick={() => handleClick(0)}>HTML</NavLink>
            <NavLink to="/css" style={{border: selectedId === 1 ? 'none' : '0.05px solid #bdbdbd' }} className="category-box"  tabIndex="1" onClick={() => handleClick(1)}>CSS</NavLink>
            <NavLink to="/javascript" style={{border: selectedId === 2 ? 'none' : '0.05px solid #bdbdbd' }} className="category-box"  tabIndex="2" onClick={() => handleClick(2)}>JavaScript</NavLink>
            <NavLink to="/react" style={{border: selectedId === 3 ? 'none' : '0.05px solid #bdbdbd' }} className="category-box"  tabIndex="3" onClick={() => handleClick(3)}>React</NavLink>
            <NavLink to="/sanity" style={{border: selectedId === 4 ? 'none' : '0.05px solid #bdbdbd' }} className="category-box"  tabIndex="4" onClick={() => handleClick(4)}>Sanity and headless CMS</NavLink>
            {/*Hvordan NavLinks brukes https://reactrouter.com/en/main/components/nav-link*/}
            {/*Jeg tror jeg kunne brukt vanlig Link tag her, men da jeg brukte det så ble ikke boksene grønn lenger så jeg bare
            fortsatte med NavLink ettersom det fungerte*/}
            </div>
            
            <Line selectedId={selectedId}/>

            <ContentBoxes selectedId={selectedId}/>

            <LocationURL setSelectedId={setSelectedId} />
            {/*Passerer ned de to første komponentene med selectdId-prop slik at de klarer å lese verdien, mens den siste har vi inn
            setSelectedId. Imotsetning til de to andre som trenger bare å lese selve proppen (statisk verdi) for å skjønne 
            hva den skal gjøre, så må LocationURL-komponenten ha setSelectedId oppdaterings-funksjonen 
            fordi kompontenens hensikt er å oppdatere setSelectedId verdien*/}
        </nav>
    );
};
    
export default Nav;