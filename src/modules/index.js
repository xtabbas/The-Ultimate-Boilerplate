import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const actions = {
  TOGGLE_TEXT: 'TOGGLE_TEXT',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

export const openModal = (modalType, modalProps) => ({
  type: actions.OPEN_MODAL,
  payload: {
    modalType,
    modalProps
  }
});

export const closeModal = () => ({
  type: actions.CLOSE_MODAL
});


export const stateReducer = (state = null, { type, payload }) => {
  switch (type) {
  case actions.OPEN_MODAL:
    return {
      modalType: payload.modalType,
      modalProps: payload.modalProps
    };
  case actions.CLOSE_MODAL:
    return {
      modalType: null,
      modalProps: {}
    };

  default:
    return state;
  }
};

const rootReducer = combineReducers({
  stateReducer,
  routing: routerReducer
});

export default rootReducer;
