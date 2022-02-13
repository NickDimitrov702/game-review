import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header.js';
import Homepage from './components/homepage/Homepage.js';
import Footer from './components/footer/Footer.js';
import About from './components/about/About.js'


function App() {



  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </Router>



  );
}

export default App;
