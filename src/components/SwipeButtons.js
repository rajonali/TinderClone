import React from "react";
import '../styles/SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";


const SwipeButtons = () => {
    return ( 
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat"><ReplayIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButtons_left"><ClearIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButtons_star">
            <StarIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons_heart">
            <FavoriteIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons_lightning">
            <FlashOnIcon fontSize="large" />
            </IconButton>

        </div>
    );
}
 
export default SwipeButtons;