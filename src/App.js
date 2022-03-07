import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 body {
  background-color: #1C658C;
 }
`

const MainBox = styled.div`
height: 100vh;
display: flex;
background-color: #1C658C;
color: #FFF;
flex-direction: column;
justify-content: center;
align-items: center;
`

const InputBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 250px;
height: 100px;
padding: 10px;
margin-bottom: 30px;
`

const Inputs = styled.input`
height: 25px;
padding: 12px;
margin: 10px;
font-weight: bolder;
border: solid rgba(255, 254, 254, 0.685);
background-color: #D8D2CB;
color: #1C658C;
`

const ButtonBox = styled.div`
width: 500px;
height: 40px;
display: flex;
justify-content: space-evenly;
`

const Buttons = styled.button`
padding: 10px;
font-weight: bolder;
background-color: #D8D2CB;
border: solid white;
color: #1C658C;
text-transform: uppercase;
text-align: center;
border-radius: 10px;

&:hover {
  cursor: pointer;
  transform: scale(1.1);
  background-color: #398AB9;
  color: white;
}
`


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
        <MainBox>
                  <GlobalStyle />
          <h1>Calculator!</h1>
          <InputBox>
            <Inputs onChange={this.handleChange} type="number" placeholder="Enter a number:" value={this.state.n1}/>
            <Inputs onChange={this.handleSecondChange} type="number" placeholder="Enter a number:" value={this.state.n2}/>
          </InputBox>

          <ButtonBox>
            <Buttons onClick={this.Add}>Add</Buttons>
            <Buttons onClick={this.Subt}>Subtract</Buttons>
            <Buttons onClick={this.Div}>Divide</Buttons>
            <Buttons onClick={this.Mult}>Multiply</Buttons>
            <Buttons onClick={this.Clear}>Clear</Buttons>
          </ButtonBox>
          <h2>Result: {this.state.result}</h2>
        </MainBox>
      )
    }
}

export default Calculator;