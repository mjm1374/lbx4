import React, { Component } from 'react';
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
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className='hexHolder'>
          <Nav nav={this.state.buttons} loadSection={this.loadSection} />
        </div>
        
      </header>
      Hello
    </div>
  );
}
}

export default App;
