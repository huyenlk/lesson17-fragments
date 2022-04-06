import AdminHomePage from "../Containers/AdminHomePage/index";
import TaskBoardPage from '../Containers/TaskBoard/index';
import LoginPage from "../Containers/LoginPage/index";
import SignupPage from "../Containers/SignupPage/index";

export const API_ENDPOINT = 'http://localhost:3001';

export const STATUSES = [
  {
    value: 0,
    label: "READY"
  },
  {
    value: 1,
    label: "IN PROGRESS"
  },
  {
    value: 2,
    label: "COMPLETE"
  }
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202
};

export const ADMIN_ROUTER = [
  {
    path: '/admin',
    name: 'Trang quan ly',
    exact: true,
    component: AdminHomePage
  },
  {
    path: '/admin/task-board',
    name: 'Quan ly cong viec',
    component: TaskBoardPage,
  }
]

export const ROUTES = [
  {
    path: '/login',
    name: 'Dang nhap',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'Dang ky',
    exact: true,
    component: SignupPage,
  },
]