import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./navbar/Navbar"
import Registration from './registration/Registration'
import Login from './login/Login'
import './app.scss';
import '../assets/styles/index.scss'

function App() {
  return (
    <Router>
      <div className="app container">
        <Navbar />
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
