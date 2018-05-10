import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import PirateDetail from './components/PirateDetail';
import registerServiceWorker from './registerServiceWorker';

class Main extends React.Component {
  render() {
    return (
      <Router>
      <div>
          <Header headerTitle="Pirate List" />
          <Route exact path="/" component={App} />
          <Route path="/pirate/:pid" component={PirateDetail} />
      </div>
      </Router>
    )
  }
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
