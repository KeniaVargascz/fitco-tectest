import React from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar } from '@mui/material';
import { useSelector } from "react-redux";
import MarkPublication from '../complex/markPublication';

const PublicationBox = ({ publication }) => {
    const { user, description, created_at } = publication;
    const { user: currentUser } = useSelector(state => state.user);

    const username = user?.username || currentUser?.username;
    const userImage = user?.img || currentUser?.img;
    const formattedDate = new Date(created_at).toLocaleString();
    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardHeader
                avatar={<Avatar alt={username} src={userImage} sx={{ width: 40, height: 40 }} />}
                title={<Typography variant="body1">{username}</Typography>}
                subheader={<Typography variant="body2" color="textSecondary">{formattedDate}</Typography>}
                action={!(user?.username === currentUser?.username) && user?.username !== undefined &&
                    <MarkPublication
                        value={publication.value}
                        user={currentUser?.id}
                        publication={publication.id} />}
            />
            <CardContent>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
        </Card>
    );
};

export default PublicationBox;
