export const Line = (props) => {
    return props.selectedId >= 0 ? <div id="Line"></div> : null;
};

/*Funksjon som tar inn props (tilfeldig) som argument, deretter via ternær operatørsjekker om selectedId proppen er 
lik eller høyere enn 0. Hvis den er det, returner Line-div, om ikke, returner null.*/
