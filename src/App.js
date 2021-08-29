import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.compontent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      Hi
    </div>
  );
}

export default App;
