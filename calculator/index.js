import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// variables

let second = 0;
let gop = ""
let dict = {
  0 : [],
  1 : []
}



class Button extends React.Component {
  render() {
    return (
      <button onClick={ () => this.props.OnClick(this.props.val)}>{this.props.val}</button>
    );
  }
}

class Calc extends React.Component {
  render() {
    return (
      <button onClick={ () => this.props.OnClick()}>calculate</button>
    );
  }
}

class Operator extends React.Component {
  render() {
    return (
      <button onClick={ () => this.props.pickop(this.props.op)}>{this.props.op}</button>
    );
  }
}
  
  class Base extends React.Component {
    chop = (op) => {
      second = 1
      gop = op
    }

    createop = (op) => {
      return (
        <Operator
          pickop = {this.chop}
          op = {op}
        />
      );
    }

    onC = (value) => {
      dict[second].push(value)

    }
    calc = () => {
      let t = dict[0].join("") + " " + gop + " " + dict[1].join("")
      alert(eval(t))
      dict[0] = []
      dict[1] = []
      second = 0
    }

    createbut(val){
      return(
        <Button 
          val = {val}
          OnClick={this.onC}
        />
      );
    }

    render() {
      return (
        <div>
            <div>
              {this.createbut(1)}
              {this.createbut(2)}
              {this.createbut(3)}
              {this.createop("+")}
            </div>
            <div>
              {this.createbut(4)}
              {this.createbut(5)}
              {this.createbut(6)}
              {this.createop("-")}
            </div>   
            <div>
              {this.createbut(7)}
              {this.createbut(8)}
              {this.createbut(9)}
              {this.createop("*")}
            </div>         
            {<Calc
              OnClick = {this.calc}
            />}
            {this.createop("/")}
        </div>
      );
    }
  }

  
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Base />);
  
