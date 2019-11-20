import React, { Component } from 'react';

export default class TextAlign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            align: "middle"
        }

        this.handleLeft = this.handleLeft.bind(this)
        this.handleMiddle = this.handleMiddle.bind(this)
        this.handleRight = this.handleRight.bind(this)
    }
    handleLeft(){
        this.setState({
            align: "left"
        })
    }
    handleMiddle(){
        this.setState({
            align: "middle"
        })
    }
    handleRight(){
        this.setState({
            align: "right"
        })
    }

    render() {
        return (
            <div className="textAlignWrapper">
                <div className="buttons">
                    <button onClick={this.handleLeft}>Left</button>
                    <button onClick={this.handleMiddle}>Middle</button>
                    <button onClick={this.handleRight}>Right</button>
                </div>
                <div className={this.state.align}>
                    Text Align
                </div>
            </div>
        )
    }
}