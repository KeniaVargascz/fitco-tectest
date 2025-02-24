import React, { useState } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from "react-redux";
import { createPublication } from "../../redux/slices/publications";

const PublishBox = () => {
    
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const handlePublish = async () => {
        if (description.trim()) {
            let user_id = user.id; 
            dispatch(createPublication({ user_id, description }));
            setDescription(""); 
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 600, margin: 'auto', padding: 2 }}>
            <TextField
                label="Escribe tu publicación..."
                multiline
                rows={1}  
                maxRows={4} 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                variant="outlined"

                sx={{
                    marginRight: '10px',
                    '& .MuiInputBase-root': {
                        borderRadius: '20px',
                    },
                    '& textarea': {
                        overflow: 'hidden',
                    },
                }}
            />
            <IconButton
                color="primary"
                onClick={handlePublish}
                sx={{
                    backgroundColor: '#fffff', 
                    borderRadius: '50%',

                    padding: '8px',
                    '&:hover': {
                        backgroundColor: '#0056b3',
                        color: '#ffffff',
                    },
                }}
            >
                <SendIcon />
            </IconButton>

        </Box>
    );
}

export default PublishBox;
