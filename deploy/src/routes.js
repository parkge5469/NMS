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
        layout: '/test/sub',
    },
    {
        path: '/findId',
        component: FindIdPage,
        layout: '/test/sub',
    },
    {
        path: '/emailFindId',
        component: EmailFindId,
        layout: '/test/sub',
    },
    {
        path: '/phoneFindId',
        component: PhoneFindId,
        layout: '/test/sub'
    },
    {
        path: '/findPassword',
        component: FindPasswordPage,
        layout: '/test/sub'
    },
    {
        path: '/choiceFindPW',
        component: ChoiceFindPW,
        layout: '/test/sub'
    },
    {
        path: '/signUp',
        component: SignUp,
        layout: '/test/sub',
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