import React, {
  Component,
  // Fragment,
  // useState
} from 'react';
import logo from './logo.svg';
import ReactHooksExample from './components/ReactHooksExample';
import './App.css';

// export default function App (props) {
// const [name, setName] = useState('mary');

//   function handleNameChange(e) {
//     setName(e.target.value);
//   }
//   return (<Row>

//     <input type = "text"
//      className = "ak-field-text"
//      id = "username"
//      name = "username"
//      placeholder = "eg. you@yourcompany.com"
//      required value = {
//        name
//      }
//      onChange = {
//        handleNameChange
//      }
//      />
//      </Row>
//      );
// }


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
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ReactHooksExample/>
      </div>
    );
  }
}

export default App;
