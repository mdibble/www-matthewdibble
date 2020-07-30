import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import NotFound from '../404/NotFound';

function App() {
    return (
        <div className='app' style={{backgroundColor: '#315252'}}>
            <Router>
                <Header />
                    <div className='body' >
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/projects' component={Projects} />
                            <Route exact path='/resume' component={Home} />
                            <Route exact path='/skills' component={Home} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
