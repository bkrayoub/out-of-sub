import { createBrowserRouter } from "react-router-dom";
import EditAcc from "./pages/EditAccount";
import Guestlobby from "./pages/Guestlobby";
import HostOffline from "./pages/HostOffline";
import Lobby from "./pages/Lobby";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Splashcreen from "./pages/Splashcreen";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Splashcreen/>
    },
    {
        path: '/login',
        element: <LogIn/>
    },
    {
        path: '/register',
        element: <SignUp/>
    },
    {
        path: '/lobby',
        element: <Lobby/>
    },
    {
        path: '/guest_lobby',
        element: <Guestlobby/>
    },
    {
        path: '/create_offline_room',
        element: <HostOffline/>
    },
    {
        path: '/edit_profile',
        element: <EditAcc/>
    },
    {
        path: '*',
        element: <NotFound/>
    },
])
export default router;