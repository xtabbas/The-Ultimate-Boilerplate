import { type } from 'src/constants';

export const modal = (state = {
  modalType: null,
  modalProps: {}
}, action) => {
  switch (action.type) {
  case type.OPEN_MODAL:
    return {
      modalType: action.modalType,
      modalProps: action.modalProps
    };
  case type.CLOSE_MODAL:
    return {
      modalType: null,
      modalProps: {}
    };
  default:
    return state;
  }
};

export default modal;
