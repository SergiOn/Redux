class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }

    reset() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div className="counter">
                <span className="count">{this.state.count}</span>
                <div className="buttons">
                    <button className="decrement" onClick={this.decrement}>-</button>
                    <button className="reset" onClick={this.reset}>R</button>
                    <button className="increment" onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));