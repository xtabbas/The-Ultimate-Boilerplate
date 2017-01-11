import { type } from 'src/constants';

export const openModal = (modalType, modalProps) => ({
  type: type.OPEN_MODAL,
  modalType,
  modalProps
});

export const closeModal = () => ({
  type: type.CLOSE_MODAL
});
