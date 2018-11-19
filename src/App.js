import React, {
  Component,
} from 'react';
import logo from './logo.svg';
import UseState from './components/Hooks/UseState';
import UseEffect from './components/Hooks/UseEffect';
import UseContext from './components/Hooks/UseContext';
import './App.css';

class App extends Component {
  render() {
    // console.log(InputField);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code> Introducing Hooks </code> - React
          </p>
          <a
            className="App-link"
            href="https://github.com/kaleem-elahi/react-hooks-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Example Code
          </a>
        </header>

        <UseState/>
        <UseEffect/>
        <UseContext/>

{/* <div className="footer">        Checkout this :
<a href="https://reactjs.org/docs/hooks-overview.html" className="href">Hooks Overview</a>
</div> */}
      </div>
    );
  }
}

export default App;
