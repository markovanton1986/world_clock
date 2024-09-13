import { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { nanoid } from 'nanoid';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: '' };
        this.deleteClock = this.deleteClock.bind(this);
    }

    deleteClock(e) {
        this.props.changedata(prev => this.props.data.filter(item => item.id !== e.target.id));
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState((state) => {
                    return { date: new Date() };
                })
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        if (this.props.data.length > 0) {
            return (
                <div className='clock-item'>
                    {this.props.data.map(item => {
                        return (
                            <div className='clock' key={nanoid(5)}>
                                <span className="name-clock">{item.name}</span>
                                <div className='timer'><Moment local add={{ hours: item.timezone }} format="HH:mm:ss">{this.state.date}</Moment></div>
                                <button id={item.id} onClick={this.deleteClock}>x</button>
                            </div>
                        )
                    })}
                </div>
            )
        } else return ''
    }

}


Clock.defaultProps = {
    data: [],
    changedata: ''
};