// Components
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import ScrollUp from './Components/ScrollUp';

// Styles
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      < Navbar />
      < ScrollUp />
      <div className='Pages'>
        < Routes />
      </div>
    </div>
  );
}

export default App;
