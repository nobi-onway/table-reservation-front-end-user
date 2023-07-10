import { Fragment } from "react";
import Home from "../pages/Home";
import MyReservation from "../pages/MyReservation";

const EmptyPage = () => <Fragment />

const guestRoutes = [
    {
        path: '/',
        component: EmptyPage,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/reservation',
        component: Home,
    }
]

const userRoutes = [
    {
        path: '/myReservation',
        component: MyReservation
    }
]

export { guestRoutes, userRoutes }