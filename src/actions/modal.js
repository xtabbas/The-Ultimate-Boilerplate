import { type } from 'src/constants';

export const openModalAction = (modalType, modalProps) => ({
  type: type.OPEN_MODAL,
  modalType,
  modalProps
});

export const closeModalAction = () => ({
  type: type.CLOSE_MODAL
});
