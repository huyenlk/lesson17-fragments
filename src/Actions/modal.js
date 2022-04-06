import * as uiTypes from '../Constants/modal';

export const showModal = () => {
  return {
    type: uiTypes.SHOW_MODAL,
  }
};

export const hideModal = () => {
  return {
    type: uiTypes.HIDE_MODAL
  }
};

export const changeModalContent = (component) => {
  return {
    type: uiTypes.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    }
  }
};

export const changeModalTitle = (title) => {
  return {
    type: uiTypes.CHANGE_MODAL_TITLE,
    payload: {
      title
    }
  }
};