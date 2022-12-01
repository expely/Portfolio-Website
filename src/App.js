import './App.css';
import Buttons from './Components/Buttons';
import Cards from './Pages/Cards/Cards';
import Intro from './Pages/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Cards/>
      <Buttons/>
    </div>
  );
}

export default App;
