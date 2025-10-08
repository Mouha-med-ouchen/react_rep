import { Component } from "react";

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState.seconds + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval); // نوقف العداد عند إزالة المكون
    }

    render() {
        return (
            <div>
                <h2>⏱️ Timer Test</h2>
                <p>Time since mount: {this.state.seconds} seconds</p>
            </div>
        );
    }
}
