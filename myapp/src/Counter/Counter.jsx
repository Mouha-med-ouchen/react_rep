import { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: true,
        };
    }

    toggleName = () => {
        this.setState(prevState => ({
            displayName: !prevState.displayName
        }));

    };

    render() {
        return (
            <>
                <button onClick={this.toggleName}>
                    - {this.state.displayName.toString()} -
                </button>

                {this.state.displayName === true ? <h1>Hello Mohamed</h1> : undefined}
            </>
        );
    }
}


