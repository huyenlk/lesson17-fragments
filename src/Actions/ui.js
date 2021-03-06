import * as uiTypes from '../Constants/ui';

export const showLoading = () => {
  return {
    type: uiTypes.SHOW_LOADING,
  }
};

export const hideLoading = () => {
  return {
    type: uiTypes.HIDE_LOADING
  }
};

export const showSidebar = () => {
  return {
    type: uiTypes.SHOW_SIDEBAR,
  }
};

export const hideSidebar = () => {
  return {
    type: uiTypes.HIDE_SIDEBAR
  }
};