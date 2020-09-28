import React from "react";
import Whatshot from '@material-ui/icons/Whatshot'
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import './styles/Header.css';
import {Link, useHistory} from "react-router-dom";

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">

            {backButton
                ? (
                    <IconButton onClick={() => history.replace(backButton)}>

                        <ArrowBackIosIcon fontSize="large"/>
                    </IconButton>
                )
                : (
                    <Link to="/personal">
                        <IconButton>
                            <PersonIcon fontSize="large"/>
                        </IconButton>
                    </Link>
                )}

            <Link to="/">
                <IconButton>
                    <Whatshot
                        fontSize="large"
                        style={{
                        color: "red"
                    }}/>
                </IconButton>
            </Link>
            <Link to="/chat">
                <IconButton>

                    <ForumIcon fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;