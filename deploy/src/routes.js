import FindIdPage from './pages/sub/FindIdPage';
import EmailFindId from './pages/sub/EmailFindId';
import PhoneFindId from './pages/sub/PhoneFindId';
import FindPasswordPage from './pages/sub/FindPasswordPage';
import ChoiceFindPW from './pages/sub/ChoiceFindPW';
import LoginPage from './pages/sub/LoginPage';
import SignUp from './pages/sub/SignUp';

import HomePage from './pages/main/HomePage';
import TodoPage from './pages/main/TodoPage';


const routes = [
    {
        path: '/login',
        component: LoginPage,
        layout: '/nms/sub',
    },
    {
        path: '/findId',
        component: FindIdPage,
        layout: '/nms/sub',
    },
    {
        path: '/emailFindId',
        component: EmailFindId,
        layout: '/nms/sub',
    },
    {
        path: '/phoneFindId',
        component: PhoneFindId,
        layout: '/nms/sub'
    },
    {
        path: '/findPassword',
        component: FindPasswordPage,
        layout: '/nms/sub'
    },
    {
        path: '/choiceFindPW',
        component: ChoiceFindPW,
        layout: '/nms/sub'
    },
    {
        path: '/signUp',
        component: SignUp,
        layout: '/nms/sub',
    },
    {
        path: '/homePage',
        component: HomePage,
        layout: '/nms/main',
    },
    {
        path: '/todoPage',
        component: TodoPage,
        layout: '/nms/main',
    },
]

export default routes;