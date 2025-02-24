import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/user";
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';
import LoadingComponent from '../simple/loading'; 

const ForumNavbar = ({ userId }) => {
    const dispatch = useDispatch();
    const { isLoading, user } = useSelector(state => state.user);
    const userEmail = user?.email || ''; 
    const userImage = user?.img || 'https://via.placeholder.com/40';
    const name = user?.name || 'Invitado';
    const lastname = user?.lastname || '';

    useEffect(() => {
        dispatch(getUser({username: userId}));
    }, [])
    return (
        <>
            {
                isLoading ? <LoadingComponent /> :
                    <AppBar position="sticky">
                        <Toolbar>
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                Foro
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ marginRight: 2 }} data-testid="user-email" >
                                    {name} {lastname} ({userEmail})
                                </Typography>
                                <Avatar alt={name} src={userImage} sx={{ width: 40, height: 40 }} />
                            </Box>
                        </Toolbar>
                    </AppBar>
            }
        </>
    );
};

export default ForumNavbar;
