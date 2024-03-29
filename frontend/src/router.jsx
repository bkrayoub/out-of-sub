import { createBrowserRouter, Navigate } from "react-router-dom";
import Credit from "./pages/Credit";
import EditAcc from "./pages/EditAccount";
import Guestlobby from "./pages/Guestlobby";
import HostOffline from "./pages/HostOffline";
import Lobby from "./pages/Lobby";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Splashcreen from "./pages/Splashcreen";
import Host from "./pages/Host";
import Find from "./pages/Find";
import NotFoundPage from "./pages/notFoundPage";
import Join from "./pages/OnlineGame/Join";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import OnlineGame from "./pages/OnlineGame/OnlineGame";
import MatchRoom from "./pages/OnlineGame/matchRoom";
import Game from "./pages/Game/Game";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/Lobby' />
            },
            {
                path: '/lobby',
                element: <Lobby />
            },
            {
                path: '/edit_profile',
                element: <EditAcc />
            },
            {
                path: '/room/:code',
                element: <Host />
            },
            {
                path: '/join',
                element: <Join />
            },
            {
                path: '/find',
                element: <Find />
            },
            {
                path: '/game/:code',
                element: <MatchRoom />
            },
        ]

    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <SignUp />
            },
            {
                path: '/splashscreen',
                element: <Splashcreen />
            },
            {
                path: '/guest_lobby',
                element: <Guestlobby />
            },
        ]
    },

    {
        path: '/create_offline_room',
        element: <HostOffline />
    },

    {
        path: '/offline_game',
        element: <Game />
    },

    {
        path: '/credit',
        element: <Credit />
    },
    {
        path: '/online-game/:code',
        element: <OnlineGame />
    },
    {
        path: '/404',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFound />
    },
])
export default router;