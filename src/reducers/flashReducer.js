import shortid from 'shortid';
import findIndex from 'lodash/findIndex';
import types from '../constants/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
  case types.DELETE_FLASH_MESSAGE: {
    const index = findIndex(state, { id: action.id });
    if (index >= 0) {
      return state.filter(key => key === index);
    }
    return state;
  }

  case types.ADD_FLASH_MESSAGE: {
    return [
      ...state, {
        id: shortid.generate(),
        type: action.message.type,
        text: action.message.text
      }
    ]
  }

  default:
    return state;
  }
};
