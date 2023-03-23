import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login } from './pages';
import { firebaseConfig } from './config';
import { initializeApp } from 'firebase/app';

initializeApp(firebaseConfig);

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
