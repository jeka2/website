import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.compontent';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
