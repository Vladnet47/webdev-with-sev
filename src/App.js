import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProjectList from './components/project-list';

function App() {
  return (
    <div className="App">
      <Navbar 
        message="Navbar"
      />
      {/* / -> /projects */}
      <ProjectList />
    </div>
  );
}

export default App;
