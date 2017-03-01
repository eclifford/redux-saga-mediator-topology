import React from 'react';
import { connect } from 'react-redux';

import { startStation, authenticateListener } from '../actions';

const Foo = React.createClass({
  render() {
    return (
      <div>
        <button onClick={() => this.props.onStartStation()}>Start Station</button>
        <button onClick={() => this.props.onAuthenticateListener()}>Authenticate Listener</button>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onStartStation: () => {
      dispatch(startStation());
    },
    onAuthenticateListener: () => {
      dispatch(authenticateListener());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Foo);
