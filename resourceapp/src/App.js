import './App.css';
import './css/main.css';

import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav/>
      {/*Føler at jeg kunne hatt flere komponenter inni her, men ettersom strukturen av layoutet er veldig simpel så tenker jeg
      at header og nav er nok*/}
    </div>
  );
}

export default App;


