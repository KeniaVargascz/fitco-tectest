import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { useDispatch } from "react-redux";
import { createReaction } from '../../redux/slices/publications';

const MarkPublication = ({ value, user, publication }) => {
    const [isBookmarked, setIsBookmarked] = useState(value);
    const dispatch = useDispatch();

    const handleClick = () => {
        setIsBookmarked(prevState => !prevState); 
        dispatch(createReaction({value: !value, user_id: user, publication_id: publication}));
    };

    return (
        <div 
            onClick={handleClick} 
            style={{ cursor: 'pointer' }} 
        >
            {isBookmarked ? (
                <FavoriteIcon style={{ color: '#F24E1E' }} />
            ) : (
                <FavoriteBorderIcon style={{ color: '#F24E1E' }} />
            )}
        </div>
    );
}

export default MarkPublication;
