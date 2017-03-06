const initialState = { count: 0 };

function updateState(state, action) {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + action.amount };
        case 'DECREMENT': return { count: state.count - action.amount };
        case 'RESET': return { count: 0 };
        default: return state;
    }
}

const incrementAction = { type: 'INCREMENT', amount: 1 };
const decrementAction = { type: 'DECREMENT', amount: 1 };
const resetAction = { type: 'RESET' };

const store = new Store(updateState, initialState);

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    increment() {
        // this.setState({ count: this.state.count + 1 });
        store.update(incrementAction);
    }

    decrement() {
        // this.setState({ count: this.state.count - 1 });
        store.update(decrementAction);
    }

    reset() {
        // this.setState({ count: 0 });
        store.update(resetAction);
    }

    render() {
        return (
            <div className="counter">
                <span className="count">{store.state.count}</span>
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