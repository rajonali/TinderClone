import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from '@material-ui/icons/Settings';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PolicyIcon from '@material-ui/icons/Policy';
import  { Link } from "react-router-dom";

import '../styles/TreeIcons.css';

function TreeIcons() {
    return (  
        <div className="TreeIcons">
            <Link to={`/personal/settings`}><IconButton><SettingsIcon fontSize="large"/> </IconButton></Link>
            <Link to={`/personal/addMedia`}><IconButton><AddAPhotoIcon fontSize="large" style={{color:'red'}}/></IconButton></Link>
            <Link to={`/personal/safteyPolicy`}><IconButton><PolicyIcon fontSize="large"/></IconButton></Link>

        </div>
    );
}
 
export default TreeIcons; 