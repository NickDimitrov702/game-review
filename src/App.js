import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header.js';
import Homepage from './components/homepage/Homepage.js';
import Footer from './components/footer/Footer.js';
import About from './components/about/About.js'
import LogIn from './components/log-in/LogIn.js'
import SignUp from './components/sign-up/SignUp.js'
import { AuthProvider } from './context/AuthContext';

function App() {



  return (
    <Router>
      <AuthProvider>
      <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/log-in' component={LogIn} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </AuthProvider>
      <Footer />
    </Router>



  );
}

export default App;
