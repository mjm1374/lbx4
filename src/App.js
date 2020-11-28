import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layouts/header'
import Nav from './components/Nav'
import About from './components/pages/about'
import {v4 as uuid} from 'uuid'
import './App.css';

class App extends Component {
  state = {
    buttons: [
        {
            id: uuid(),
            name: 'Home',
            img: null,
            altText: 'nav1 alt',
            link: '/',
            active: false,
        }, 
        {
            id: uuid(),
            name: 'about',
            img: null,
            altText: 'nav alt',
            link: '/about',
            active: true,
        }, 
        {
            id: uuid(),
            name: 'Work',
            img: null,
            altText: 'nav3 alt',
            link: '#',
            active: false,
        }, 
    ]
}


loadSection = (id) => {
  console.log(id);
  this.setState({buttons: this.state.buttons.map(button => {
    (button.id === id) ? button.active = true : button.active = false;
    return button
  }
  
  )})
}

render(){
  return (
    <Router>
      <div className="App">
    
      <Header />
      <Route exact path="/" render={ props => (
        <React.Fragment>
        <nav className="App-header">
          <div className='hexHolder'>
            <Nav nav={this.state.buttons} loadSection={this.loadSection} />
          </div>
          </nav>
          </React.Fragment>
          
      )} />
      <Route path="/about" component={About} />
      </div>
  </Router>

  );
}
}

export default App;
