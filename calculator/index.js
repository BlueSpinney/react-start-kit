import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



let dict = {
}
for (let i = 0; i < 9;i++){
  dict[i] = null
}


class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.OnClick}>{this.props.val}</button>
    );
  }
}
  
  class Base extends React.Component {


    onC = () => {
      for (let i = 0; i < Object.keys(dict).length;i++){
        alert(dict[i]);
      }
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
            </div>
        </div>
      );
    }
  }

  
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Base />);
  
