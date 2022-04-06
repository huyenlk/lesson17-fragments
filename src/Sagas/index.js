import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects';
import * as taskTypes from '../Constants/task';
import { deleteTask, getList, updateTask } from '../Apis/task';
import { STATUSES, STATUS_CODE } from '../Constants/index';
import { addTaskFailed, addTaskSuccess, fetchListTask, fetchListTaskFailed, fetchListTaskSuccess, filterTaskSuccess, updateTaskSuccess, updateTaskFailed, deleteTaskSuccess, deleteTaskFailed } from '../Actions/task';
import { showLoading, hideLoading } from '../Actions/ui';
import { hideModal } from '../Actions/modal';
import { addTask } from '../Apis/task';

function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const { params } = action.payload;
    const resp = yield call(getList, params);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchCreateTaskAction() {
  yield true
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask({ q: keyword, }))
  /*const { keyword } = payload;
  const list = yield select(state => state.task.listTask);
  const filteredTask = list.filter(task => task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
  yield put(filterTaskSuccess(filteredTask));*/
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title, description, status: STATUSES[0].value
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data))
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskEditing = yield select(state => state.task.taskEditing);
  yield put(showLoading());
  const resp = yield call(updateTask, { title, description, status }, taskEditing.id);
  const { status: statusCode, data } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFailed(data))
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(deleteTask, id);
  const { status: statusCode, data } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteTaskFailed(data))
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga)
}

export default rootSaga;