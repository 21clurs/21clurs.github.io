import logo from './logo.svg';
import './App.css';

import Header from './Header.js'
import ColorButtons from './ColorButtons.js'

function App() {
  return (
    <div>
      <Header name="Hello, visitor to this work in progress! Try clicking the buttons if you so desire."/>
      <ColorButtons />
    </div>
  );
}

export default App;
