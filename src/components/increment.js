import React, { Component } from 'react';

export default class Incrementor extends Component {
    constructor(props){
        super(props);
        this.state = {
            runningValue: 0
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSub = this.handleSub.bind(this)
    }
    handleAdd =() => {
        this.setState({
            runningValue: this.state.runningValue + 1
        })
    }
    handleSub = () => {
        this.setState({
            runningValue: this.state.runningValue -1
        })
    }
    render() {
        return (
            <div className="incrementWrapper">
                <div className="numberDisplay">
                    <div className="number">
                        {this.state.runningValue}
                    </div>
                </div>
                <div className="buttonWrapper">
                    <button onClick={this.handleAdd}>Up</button>
                    <button onClick={this.handleSub}>Down</button>
                </div>
            </div>
        )
    }
}
