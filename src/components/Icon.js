import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Face from 'material-ui/svg-icons/action/face';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router'


class Icon extends Component{
    render(){
        return(
            <div>
            <IconMenu
                iconButtonElement={<IconButton> <Face color={"#FFF"} /> </IconButton>}
         
        >
        <MenuItem value="1" primaryText={this.props.email} />
        <MenuItem value ="2" primaryText="Sign Out" onClick={ () => this.logOut() } />
        </IconMenu>
            </div>
        )
    }
    logOut(){
        sessionStorage.clear();
        this.props.history.push('/login') 
    }
}
export default withRouter(Icon);