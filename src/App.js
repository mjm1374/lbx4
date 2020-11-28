import Nav from './components/Nav'
import './App.css';

function App() {
  let state = {
    buttons: [
        {
            id: 1,
            name: 'nav1',
            img: null,
            altText: 'nav1 alt',
            link: '#',
        }, 
        {
            id: 2,
            name: 'nav2',
            img: null,
            altText: 'nav alt',
            link: '#',
        }, 
        {
            id: 3,
            name: 'nav3',
            img: null,
            altText: 'nav3 alt',
            link: '#',
        }, 
    ]
}

  return (
    <div className="App">
      <header className="App-header">
      <div class='hexHolder'>
          <Nav nav={state.buttons} />
        </div>
        
      </header>
      Hello
    </div>
  );
}

export default App;
