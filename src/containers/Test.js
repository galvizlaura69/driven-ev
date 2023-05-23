import { connect } from 'react-redux';

import Test from '../components/Test';
import { set } from '../actions/test';

const mapStateToProps = state => ({
  value: state.test
});

const mapDispatchToProps = (dispatch) => ({
  onSet: value => dispatch(set(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);