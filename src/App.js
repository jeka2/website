import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.compontent';
import Footer from './components/footer/footer.component';
import FrontPage from './pages/front-page.component';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={FrontPage} />
        </Switch>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
