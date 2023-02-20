import FiltRes from './FiltCon';

const ContentBoxes = ({ selectedId }) => {
    return (
        <div className="content-boxes-container">
            <div className={`content-box ${selectedId === 0 ? 'active' : ''}`} id="box-content-0">
                <FiltRes category="html"/>
            </div>
            <div className={`content-box ${selectedId === 1 ? 'active' : ''}`} id="box-content-1">
                <FiltRes category="css"/>
            </div>
            <div className={`content-box ${selectedId === 2 ? 'active' : ''}`} id="box-content-2">
                <FiltRes category="javascript"/>
            </div>
            <div className={`content-box ${selectedId === 3 ? 'active' : ''}`} id="box-content-3">
                <FiltRes category="react"/>
            </div>
            <div className={`content-box ${selectedId === 4 ? 'active' : ''}`} id="box-content-4">
                <FiltRes category="headless-cms"/>
            </div>

            {/*Først passerer jeg ned selectedId proppen til komponenten slik at verdien blir lest. På hvert div-element
            har de en className som har verdien som en string med content-box, og deretter via selectedId gitt et id-nummer.
            Betingelsen bruker en ternær operatør som sjekker om selectedId tilsvarer Id. Hvis det blir oppfylt, gi den
            et active klassenavn, hvis ikke, en tom string. Så className blir da f.eks content-box-2. Dette brukes for å
            bestemme hvilken boks som blir framvist eller ikke, via active klassen i css. 

            Videre, setter jeg filtrerings- og mappe komponenten inn slik at innholdet blir displayed, og sender ned category-prop
            med riktig ressurskategori slik at filtreringen vet akkurat hvilket innhold den skal sende oppover til innholdsboks-
            komponenten. 
            
            Id på hver av boksene gjør stort sett ingenting i denne koden, men har lest at det uansett er i ''best practice''
            å ha det likevel*/}

        </div>
    );
};

export default ContentBoxes;
