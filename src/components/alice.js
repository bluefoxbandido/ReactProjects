import React, { Component } from 'react';

export default class Alice extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: "big"
        }
        this.handleBig = this.handleBig.bind(this)
        this.handleSmall = this.handleSmall.bind(this)
    }
    handleBig(){
        this.setState({
            size: "big"
        })
    }
    handleSmall(){
        this.setState({
            size: "small"
        })
    }

    render(){
        return(
            <div className="aliceWrapper">
                <div style={{height: "110px"}} className={this.state.size}>
                    Alice
                </div>
                <div className="buttonsWrapper">
                    <button onClick={this.handleSmall}>Small</button>
                    <button onClick={this.handleBig}>Big</button>
                </div>
                
            </div>
        )
    }
}