import React from 'react';
import { connect } from 'react-redux';

const DisplayState = ({ value, number }) => (
  <span>{value} - {number}</span>
);

const mapStateToProps = state => ({
  value: state.test,
  number: state.counter
});

export default connect(mapStateToProps)(DisplayState);