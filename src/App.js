import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.js';
import Homepage from './components/homepage/Homepage.js';
import Footer from './components/footer/Footer.js';
import About from './components/about/About.js'
import LogIn from './components/log-in/LogIn.js'
import SignUp from './components/sign-up/SignUp.js'
import { AuthProvider } from './context/AuthContext';
import PrivateRout from './components/privateRout/PrivateRout';
import Dashboard from './components/Dashboard/Dashboard';
import PublicRout from './components/publicRout/PublicRouter';
import UsersDAshboard from './components/user/UserDashboard.js'
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
function App() {

  // const location = useLocation()
  // restricted={false}
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <AuthProvider>
          <Header />
          <Routes >
            <Route path='/' element={<PrivateRout />}>
              <Route path='/dashboard' element={<UsersDAshboard />} />
              <Route exact path='/' element={<Homepage />} />
            </Route>
            {/* <PrivateRout exact path='/dashboard' element={UsersDAshboard} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/log-in' element={<LogIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes >
        </AuthProvider>
      </AnimatePresence>
      <Footer />
    </Router>



  );
}

export default App;
