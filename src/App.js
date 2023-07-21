import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import { AuthContext } from './store/Auth';
import { guestRoutes, userRoutes } from './routes';

function App() {
    const { token, setIsLoginModalOpen } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                {guestRoutes.map((route, index) => {
                    const Page = route.component;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            Component={() => (
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            )}
                        />
                    );
                })}

                {userRoutes.map((route, index) => {
                    const Page = route.component;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            Component={() => {
                                if (!token) setIsLoginModalOpen(true);

                                return (
                                    <DefaultLayout>
                                        {token && <Page />}
                                    </DefaultLayout>
                                );
                            }}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
