
import './App.css';
import NavBar from './components/Navbar'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'

function App() {
  return (

    <BrowserRouter>
      <NavBar />

      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>

    </BrowserRouter>
  );
}

export default App;
