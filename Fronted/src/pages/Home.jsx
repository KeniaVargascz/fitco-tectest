import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPublications } from "../redux/slices/publications";
import { Grid2, Typography } from '@mui/material';
import PublicationBox from '../components/complex/publication_box';
import PublishBox from '../components/complex/publish_box';
import LoadingComponent from '../components/simple/loading';

export const Home = () => {
    const dispatch = useDispatch();
    const { isLoading, publications } = useSelector(state => state.publication);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getAllPublications({ user_id: user.id }));
    }, [])

    return (
        <>
            {
                isLoading ? <LoadingComponent /> :
                    <React.Fragment>
                        <PublishBox />
                        <Grid2
                            container justifyContent="flex-end"
                        >
                            <Grid2 item xs={6} mr={2} onClick={() => dispatch(getAllPublications({ user_id: user.id }))}>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#B0B0B0", fontSize: "12px", cursor: "pointer" }}
                                >
                                    Ver más
                                </Typography>
                            </Grid2>
                        </Grid2>
                        <div className="home">
                            {publications.map(publication => (
                                <PublicationBox key={publication.id} publication={publication} />
                            ))}
                        </div>
                    </React.Fragment>


            }
        </>
    )
}

