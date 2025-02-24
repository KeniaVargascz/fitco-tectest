import React from 'react';
import ForumNavbar from '../components/complex/forum_navbar';
import { Home } from './Home'; 
import { useLocation } from 'react-router-dom';

export const Forum = () => {
    const location = useLocation();
    const username = location.state.username;

    return (
        <>
            <ForumNavbar userId={username}/>
            <Home />
        </>
    )
}

