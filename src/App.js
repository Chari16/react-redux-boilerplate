import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increment, decrement, incrementWithData } from './actions/counterActions';
 
class App extends Component {

  handleClick = () => {
    console.log("click")
    this.props.onIncrementWithData(5);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <h1>Counter {this.props.counter}</h1>
        <button onClick = {this.props.onIncrement }>+</button>
        <button onClick = {this.props.onDecrement }>-</button>
        <button onClick = {this.handleClick}>increment with data</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onIncrementWithData: (data) => dispatch(incrementWithData(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
