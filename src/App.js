import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import Home from './pages/Home';

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
            </Routes>
        </Router>
    );
}

export default App;
