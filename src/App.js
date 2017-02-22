import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this)
  }


  increment() {
    this.setState({
      count : this.state.count +1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count -1
      
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Counter :</h2>
        <h1  style={{color:this.props.data}}>{this.state.count}</h1>
       <button onClick ={this.increment} className="plus">Add</button><br/><br/>
       <button onClick={this.decrement} className="minus">Subtract</button>
      </div>
    );
  }
}

export default App;
