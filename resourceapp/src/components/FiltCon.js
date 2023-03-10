const FiltRes = ({ category }) => {
    const resources = [
        {
            title: "W3Schools",
            url: "https://www.w3schools.com/html/",
            category: "html"
        },
        {
            title: "W3Schools",
            url: "https://www.w3schools.com/css/",
            category: "css"
        },
        {
            title: "W3Schools",
            url: "https://www.w3schools.com/js/",
            category: "javascript"
        },
        {
            title: "W3Schools",
            url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
            category: "react"
        },
        {
            title: "HTML Living standard",
            url: "https://html.spec.whatwg.org/multipage/",
            category: "html"
        },
        {
            title: "HTML.com Tutorials",
            url: "https://html.com/",
            category: "html"
        },
        {
            title: "W3C HTML & CSS Standards",
            url: "https://www.w3.org/standards/webdesign/htmlcss.html",
            category: "css"
        },
        {
            title: "W3C CSS Validator",
            url: "https://jigsaw.w3.org/css-validator/",
            category: "css"
        },
        {
            title: "CSS Tricks",
            url: "https://css-tricks.com/",
            category: "css"
        },
        {
            title: "MDN Web Docs",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            category: "javascript"
        },
        {
            title: "How to read JavaScript Documentation",
            url: "https://www.youtube.com/watch?v=O3iR-CIufKM",
            category: "javascript"
        },
        {
            title: "React documentation",
            url: "https://reactjs.org/docs/getting-started.html",
            category: "react"
        },
        {
            title: "Sanity documentation",
            url: "https://www.sanity.io/docs",
            category: "headless-cms"
        },
        {
            title: "OnCrawl: a beginners guide to headless CMS",
            url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/",
            category: "headless-cms"
        },
        {
            title: "Section.io: Getting started with Sanity CMS",
            url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/",
            category: "headless-cms"
        }
    ].filter((resource) => resource.category === category);
    /*Filtrering som tar imot resource som en enkel argument og returnerer en boolean verdi om kategorien fra resource samsvarer 
    med kategori. Dermed lages det en ny array som filtrerer de tingene som tilh??rer en bestemt kategori. Jeg valgte ?? sette inn 
    hele arrayen i ressurser.js inni selve filtrasjonskomponente. Da jeg pr??vde ?? importere js-filen s?? fikk jeg konstant 
    error om at resources aldri ble brukt, og ga opp etter en stund med trial and error i flere timer*/

    return (
      <div>
        <h2>{category}</h2>
        <ul>
          {resources.map((resource) => (
            <li key={resource.title}>
                <a href={resource.url}>{resource.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
/*Liste opp ting med key https://stackoverflow.com/questions/66299533/i-want-to-get-form-data-in-ul-li-with-the-map-method-react-js*/
export default FiltRes;