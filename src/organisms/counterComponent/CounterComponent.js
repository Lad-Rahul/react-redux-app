import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../../actions/counterActions';

class CounterComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { counter, incrementCountAction, decrementCountAction } = this.props || {};
    return (
        <div>
        <h1>{counter}</h1>
        <button onClick={incrementCountAction}>Increment</button>
        <button onClick={decrementCountAction}>Decrement</button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state?.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCountAction: () => dispatch(incrementCount()),
        decrementCountAction: () => dispatch(decrementCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);