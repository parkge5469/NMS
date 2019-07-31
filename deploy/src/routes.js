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
        layout: '/sub',
    },
    {
        path: '/findId',
        component: FindIdPage,
        layout: '/sub',
    },
    {
        path: '/emailFindId',
        component: EmailFindId,
        layout: '/sub',
    },
    {
        path: '/phoneFindId',
        component: PhoneFindId,
        layout: '/sub'
    },
    {
        path: '/findPassword',
        component: FindPasswordPage,
        layout: '/sub'
    },
    {
        path: '/choiceFindPW',
        component: ChoiceFindPW,
        layout: '/sub'
    },
    {
        path: '/signUp',
        component: SignUp,
        layout: '/sub',
    },
    {
        path: '/homePage',
        component: HomePage,
        layout: '/main',
    },
    {
        path: '/todoPage',
        component: TodoPage,
        layout: '/main',
    },
]

export default routes;