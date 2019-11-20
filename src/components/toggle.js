import React, { Component } from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        };
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
        if (this.state.show === false){
            this.setState({
                show: true
            })
        } else if (this.state.show === true){
            this.setState({
                show: false
            })
        }
    }

    render() {
        return (
            <div className="toggleWrapper">
                <button onClick={this.handleToggle}>Click Me</button>
                <div className={this.state.show === false ? 'hide' : ''}>
                    Now you see me
                </div>
                <div className={this.state.show === true ? 'hide' : ''}>
                    Now you dont
                </div>
            </div>
        )
    }

}