
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GrandPrixPage from './pages/GrandPrixPage';
import Header from './components/Header';
import Footer from './components/Footer';
import DisclaimerPage from './pages/DisclaimerPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/gp/:id" element={<GrandPrixPage />} />
                        <Route path="/disclaimer" element={<DisclaimerPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;