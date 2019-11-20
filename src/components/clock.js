import React, { Component } from 'react'
import moment from 'moment';

export default class ClockApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time:  "" 
        }
    }
    componentDidMount(){
        const interval = setInterval(() => {
            this.setState({
                time: moment().format("dddd, MMMM Do YYYY hh:mm:ss a")
            })
        }, 1000);
    }
    componentWillUnmount(){
        const deleteInterval = clearInterval(interval);
    }

    render() {
        console.log()
        return (

            <div className='clockText'>
                {moment().format("dddd, MMMM Do YYYY hh:mm:ss a")}
            </div>
        )
    }
}