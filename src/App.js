import React, { Component } from 'react';
import Header from './components/layouts/header'
import Nav from './components/Nav'
import './App.css';

class App extends Component {
  state = {
    buttons: [
        {
            id: 1,
            name: 'nav1',
            img: null,
            altText: 'nav1 alt',
            link: '#',
            active: false,
        }, 
        {
            id: 2,
            name: 'nav2',
            img: null,
            altText: 'nav alt',
            link: '#',
            active: true,
        }, 
        {
            id: 3,
            name: 'nav3',
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
    <div className="App">
    <Header />
      <nav className="App-header">
        <div className='hexHolder'>
          <Nav nav={this.state.buttons} loadSection={this.loadSection} />
        </div>
        
      </nav>
      Hello
    </div>
  );
}
}

export default App;
