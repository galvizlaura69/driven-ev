import { connect } from 'react-redux';

import Counter from '../components/Counter';
import { increase, decrease } from '../actions/counter';

const mapStateToProps = state => ({
  value: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increase()),
  onDecrement: () => dispatch(decrease())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);