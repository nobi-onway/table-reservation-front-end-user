import { Fragment } from "react";
import Home from "../pages/Home";
import MyReservation from "../pages/MyReservation";
import Reservation from "../pages/Reservation";

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
        component: Reservation,
    }
]

const userRoutes = [
    {
        path: '/myReservation',
        component: MyReservation
    }
]

export { guestRoutes, userRoutes }