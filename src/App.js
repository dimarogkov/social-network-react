import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Header />
                <Navbar />

                <div className="content">
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dialogs" element={<Dialogs />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
