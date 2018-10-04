import React, {Component} from 'react';
import './forminput.css';


class FormInput extends Component {

    state={
        inputSelected: false
    }

    handleInputUpdate = (e) => {
        let targetValue = e.target.value;
        this.props.updateField(targetValue);
    }
    //or
    /*handleUserInput (e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value});
}
*/


    handleInputFocus=()=>{
        this.setState({
            inputSelected: true
        })
    }
    handleInputBlur=(e)=>{
        const targetValue = e.target.value;
        if(targetValue.length < 1){
            this.setState({
                inputSelected: false
            })
        }
    }

    render(){
        return(
            <div className={this.props.inputHasError 
                                ? "form-field input-wrap has-error" 
                                : "form-field input-wrap"}>
                <span className={this.state.inputSelected ? "pcr-input input-filled": "pcr-input"} >
                    <input 
                        type="text" 
                        className="form-input"
                        name={this.props.id}
                        value={this.props.fieldValue}
                        onFocus={this.handleInputFocus}
                        onBlur={this.handleInputBlur}
                        onChange={this.handleInputUpdate}
                    />
                    <label className="form-label" htmlFor={this.props.id}>
                        <span className="form-label-content">{this.props.name}</span>
                    </label>
                </span> 
                <p className="error-msg">Please enter a valid {this.props.name}.</p>    
             </div>
        )
    }
}

export default FormInput;