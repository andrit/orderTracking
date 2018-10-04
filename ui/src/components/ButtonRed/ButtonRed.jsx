import React, {Component} from  'react';
import './buttonred.css';

class ButtonRed extends Component{
    handleClick = (e) => {
        e.preventDefault();
        this.props.handleButtonSubmit();
    }
    render(){
        return( <button 
                    type="submit" 
                    onClick={this.handleClick}>
                        {this.props.children}</button>
            )
    }
}

export default ButtonRed;