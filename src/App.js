import './App.css';
import React from 'react';
import LandedContainer from './containers/landed_container'
import { NavBar } from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about'
import ResultsContainer from './containers/resultsContainer';


class App extends React.Component {
  state = {
    result: []
  }
  res = (e) => {
      this.setState({
        result: [...this.state.result, e]
      })
      return this.state
  }

  render(){
   return (
    <div>
      <Router>
      {/* location: where you are, history: do stuff, match: params */}
      <NavBar />
        <Switch>
        <Route exact path='/' render={(props) => (<LandedContainer {...props} />)} />
        <Route exact path='/results' render={(props) => (<ResultsContainer {...props} res={this.res} state={this.state} />)} />
        <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );}
}


export default App;
