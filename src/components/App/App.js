import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../404/NotFound';

function App() {
    return (
        <div className='app' style={{backgroundColor: 'purple'}}>
            <Router>
                <Header />
                    <div className='body' >
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/contact' component={Home} />
                            <Route exact path='/projects' component={Home} />
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
