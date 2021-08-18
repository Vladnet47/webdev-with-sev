import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProjectList from './components/project-list';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar 
          message="Navbar"
        />
        <Switch>
          <Route path="/projects">
            <ProjectList />
          </Route>
          <Route path="/blog">
            <p>Blog</p>
          </Route>
          <Redirect from="/" to="/projects" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
