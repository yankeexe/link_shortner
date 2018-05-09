import React, {Component} from 'react';
//material ui component import
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component{
    render(){
        return(
            <MuiThemeProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path = "/login" component={Login} />
                        <Route path = "/dashboard" component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider> 

        )
        
    }
}

export default App;