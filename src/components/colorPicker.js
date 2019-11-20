import React, { Component } from 'react';

export default class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({color: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    render(){
        console.log(this.state.color)
        return(
            <div>
                <div style={{color: this.state.color}}>
                    ColorPicker
                </div>
                <label>
                    Color:
                    <input type="text" value={this.state.color} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Submit" />
            </div>
        )
    }
}