import React, { Component } from 'react';
import moment from 'moment';

export default class ClockApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: moment().format('MMMM Do YYYY, h:mm:ss a')
        }

    }

    componentDidMount(){
        this.interval = setInterval(() => this.setState({
            time: Date.now()
        }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render(){
        return (
            <div>
                {this.state.value}
            </div>
        )
    }
}