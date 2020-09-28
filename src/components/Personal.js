import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../styles/Personal.css';
import TreeIcons from './TreeIcons';
function Personal(){

    return (<div className="Personal">

<Avatar className="personalScreen__image"
                    alt="dsa"
                    style={{height:'25vw', width:'25vw'}}
                    src={"https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"} />
<br />
<h1 className="personalScreen_name">Tasnim Ali, 19</h1>
<br />
<h2 className="personalScreen_school">Southern University A&M</h2>
    
    <TreeIcons />
    
    </div>);
}
 
export default Personal;