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
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/Lobby'/>
            },
            {
                path: '/lobby',
                element: <Lobby/>
            },
            {
                path: '/edit_profile',
                element: <EditAcc/>
            },
        ]

    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <LogIn/>
            },
            {
                path: '/register',
                element: <SignUp/>
            },
            {
                path: '/splashscreen',
                element: <Splashcreen/>
            },
            {
                path: '/guest_lobby',
                element: <Guestlobby/>
            },
        ]
    },

    {
        path: '/create_offline_room',
        element: <HostOffline/>
    },
    
    {
        path: '/credit',
        element: <Credit/>
    },
    {
        path: '*',
        element: <NotFound/>
    },
])
export default router;