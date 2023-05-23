import { INC, DEC } from '../constants/counter';

const initState = 0;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case INC:
      return state + 1;
    case DEC:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;