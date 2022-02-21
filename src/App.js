import React, { Component } from "react";
import './App.css'

class Calculator extends Component {
  state = {
  n1: null,
  n2: null,
  result: null
}
 
  handleChange = (event) => {
        this.setState({
      n1: Number(event.target.value)
    })
  }

  handleSecondChange = (event) => {
    this.setState({
      n2: Number(event.target.value)
    })
  }

  Add = () => {
    let { n1, n2 } = this.state;
    if(n1 && n2 !== null ){
      this.setState({
        result: n1 + n2
      })
    }
    
  }

  Subt = () => {
    let { n1, n2 } = this.state;
    if(n1 && n2 !== null){
    this.setState({
      result: n1 - n2
    })
  }
  }

  
  Div = () => {
    let { n1, n2 } = this.state;
    if(n1 && n2 !== null){
    this.setState({
      result: n1 / n2
    })
  }
  }

  
  Mult = () => {
    let { n1, n2 } = this.state;
    if(n1 && n2 !== null){
    this.setState({
      result: n1 * n2
    })
  }
  }

  Clear = () => {
    let { n1, n2 } = this.state
    this.setState({
      n1: "",
      n2: "",
      result: ""
    })
  }

    render(){
      return(
        <div className="MainBox">
          <h1>Calculator!</h1>
          <div className="Inputs">
            <input onChange={this.handleChange} type="number" placeholder="Enter a number:" value={this.state.n1}/>
            <input onChange={this.handleSecondChange} type="number" placeholder="Enter a number:" value={this.state.n2}/>
          </div>

          <div className="Buttons">
            <button onClick={this.Add}>Add</button>
            <button onClick={this.Subt}>Subtract</button>
            <button onClick={this.Div}>Divide</button>
            <button onClick={this.Mult}>Multiply</button>
            <button onClick={this.Clear}>Clear</button>
          </div>
          <h2>Result: {this.state.result}</h2>
        </div>
      )
    }
}

export default Calculator;