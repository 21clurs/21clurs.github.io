import logo from './logo.svg';
import './App.css';

import Header from './Header.js'
import ColorButtons from './ColorButtons.js'

function App() {
  return (
    <div>
      <Header name="Clara"/>
      <Header name="Kim"/>
      <ColorButtons />
    </div>
  );
}

export default App;
