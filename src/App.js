import React, {Component} from 'react';
//material ui component import
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import {Card,CardText} from 'material-ui/Card';
import Header from './Components/Header';
import Body from './Components/Body';
import Login from './Components/Login';

class App extends Component{
    render(){
        return(
            <MuiThemeProvider>
              <Login />
            </MuiThemeProvider> 

        )
        
    }
}

export default App;