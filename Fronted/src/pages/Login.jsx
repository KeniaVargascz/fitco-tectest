import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid2, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../redux/slices/user';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { user, error } = useSelector(state => state.user);
    const [username, setUsername] = useState('');
    const [alert, setAlert] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (username) {
            dispatch(getUser({ username }));

        } else {
            setAlert(true);
            setTimeout(() => setAlert(false), 3000);
        }
    };
    useEffect(() => {
        if (!error && user) {
            navigate('/', {
                state: {
                    username: user.username,
                    user_id: user.id
                }
            });
        }
        if (error) {
            setAlert(true);
            setTimeout(() => setAlert(false), 3000);
        }
    }, [error, user]);
    return (
        <Grid2
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100vh' }}
        >
            <Typography mb={2}
                variant="body2"
                sx={{ color: "black", fontSize: "24px", cursor: "pointer" }}

            >
                Bienvenido al Foro
            </Typography>
            <Typography mb={2}
                variant="body2"
                sx={{ color: "#B0B0B0", fontSize: "14px", cursor: "pointer" }}

            >
                ¡Ingresa tu nombre de usuario para continuar!
            </Typography>
            <Grid2 item>
                <TextField
                    label="Nombre de usuario"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    sx={{
                        mb: 2,
                        borderRadius: '30px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '30px',
                        },
                    }}
                />
            </Grid2>
            <Grid2 item>
                <Button
                    sx={{
                        borderRadius: '30px',
                        padding: '10px',
                        textTransform: 'none',
                    }}
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    fullWidth
                >
                    Ir
                </Button>
            </Grid2>
            <Grid2 item>
                {
                    alert && <Box
                        sx={{
                            backgroundColor: '#FFB3B3',
                            marginTop: '30px',
                            padding: '10px',
                            borderRadius: '16px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        ¡Debes ingresar un nombre de usuario permitido!
                    </Box>
                }
            </Grid2>
        </Grid2>
    );
};

