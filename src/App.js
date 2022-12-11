import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import NavBar from './NavBar';
import Experience from './Experience';
import About from './About';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <About></About>
      <Experience></Experience>
    </div>
  );
}

export default App;
