import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import MyReservation from './pages/MyReservation';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    Component={() => (
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    )}
                />
                <Route
                    path="/reservation"
                    Component={() => (
                        <DefaultLayout>
                            <Reservation />
                        </DefaultLayout>
                    )}
                />
                <Route
                    path="/myReservation"
                    Component={() => (
                        <DefaultLayout>
                            <MyReservation />
                        </DefaultLayout>
                    )}
                />
            </Routes>
        </Router>
    );
}

export default App;
