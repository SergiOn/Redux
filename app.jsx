const initialState = { count: 0 };

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + action.amount };
        case 'DECREMENT': return { count: state.count - action.amount };
        case 'RESET': return { count: 0 };
        default: return state;
    }
}

function incrementAction(amount) {
    return { type: 'INCREMENT', amount };
}
function decrementAction(amount) {
    return { type: 'DECREMENT', amount };
}
function resetAction() {
    return { type: 'RESET' };
}

const store = Redux.createStore(reducer, initialState);

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    increment() {
        let amount = parseInt(this.refs.amount.value) || 1;
        store.dispatch(incrementAction(amount));
    }

    decrement() {
        let amount = parseInt(this.refs.amount.value) || 1;
        store.dispatch(decrementAction(amount));
    }

    reset() {
        store.dispatch(resetAction());
    }

    render() {
        const count = store.getState().count;

        return (
            <div className="counter">
                <span className="count">{count}</span>
                <div className="buttons">
                    <button className="decrement" onClick={this.decrement}>-</button>
                    <button className="reset" onClick={this.reset}>R</button>
                    <button className="increment" onClick={this.increment}>+</button>
                </div>
                <input className="value" type="text" ref="amount" defaultValue="1"/>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));