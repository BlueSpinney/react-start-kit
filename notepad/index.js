import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

let t = ""
document.addEventListener('keydown', function(event){
    if (event.key.length === 1){
        t = t + event.key
        task = t + "|"
        root.render(<Base />)
    }
    else if (event.key === 'Backspace'){
        t = t.slice(0, -1)
        task = t + "|"
        root.render(<Base />)        
    }
    else if (event.key === 'Enter'){
        task = t + "<br/>"
        root.render(<Base />)
    }
}
);
document.body.style = 'background: black;';




let task = []

root.render(<p>hi mom</p>)

class Base extends React.Component{

    createNew = () => {
        t = ""
        task = t
        root.render(<Base />)
    }


    render() {
        return(
            <div>
                <div>
                    <p>{task}</p>
                </div>
                <div></div>
                <div></div>
                <button onClick={this.createNew}>clear</button>
            </div>
        );
    }
}


root.render(<Base />);
