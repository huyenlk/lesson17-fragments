import * as taskConstants from '../Constants/task';
import { toastError, toastSuccess } from '../Helpers/toastHelper';

const initialState = {
  listTask: [],
  taskEditing: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return {
        ...state,
        listTask: []
      }
    case taskConstants.FETCH_TASK_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listTask: data
      }
    case taskConstants.FETCH_TASK_FAILED:
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: []
      }
    case taskConstants.FILTER_TASK_SUCCESS:
      const { data: data1 } = action.payload;
      return {
        ...state,
        listTask: action.payload.data
      }
    case taskConstants.ADD_TASK:
      return {
        ...state,
      }
    case taskConstants.ADD_TASK_SUCCESS:
      const { data: data2 } = action.payload;
      toastSuccess('Them moi cong viec thanh cong');
      return {
        ...state,
        listTask: [data2].concat(state.listTask),
      }
    case taskConstants.ADD_TASK_FAILED:
      const { error: error1 } = action.payload;
      toastError(error1);
      return {
        ...state,
      }
    case taskConstants.SET_TASK_EDITING:
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task
      }
    case taskConstants.UPDATE_TASK:
      return {
        ...state,
      };
    case taskConstants.UPDATE_TASK_SUCCESS:
      const { data: data3 } = action.payload;
      const { listTask } = state;
      const index = listTask.findIndex(item => item.id === data.id);
      toastSuccess('Cap nhat cong viec thanh cong');
      if (index !== -1) {
        const newList = [
          ...listTask.splice(0, index),
          data3,
          ...listTask.splice(index + 1),
        ];
        return {
          ...state,
          listTask: newList,
        };
      }
      break
    case taskConstants.UPDATE_TASK_FAILED:
      const { error: error2 } = action.payload;
      toastError(error2);
      return {
        ...state,
      }
    case taskConstants.DELETE_TASK:
      return {
        ...state,
      };
    case taskConstants.DELETE_TASK_SUCCESS:
      const { data: taskId } = action.payload;
      toastSuccess('Xoa cong viec thanh cong');
      return {
        ...state,
        listTask: state.listTask.filter(item => item.id === taskId)
      };
    case taskConstants.DELETE_TASK_FAILED:
      const { error: error3 } = action.payload;
      toastError(error3);
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default reducer;