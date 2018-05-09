import React, {Component} from 'react';
import Body from './Body';
import {Card,CardText} from 'material-ui/Card';
import Header from './Header';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <Header />
                <Body />
            </div>
            
        )
    }
}

export default Dashboard;