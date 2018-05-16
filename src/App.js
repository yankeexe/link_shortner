import React, {Component} from 'react';
//material ui component import
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import Body from './components/Body';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component{
    render(){
        return(
            <MuiThemeProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path = "/login" component={Login} />
                        <Route path = "/dashboard" component={Dashboard} />
                        <Route Path = "/table" component = {Body} />
                        <Route exact path = "/login" component = {Login} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider> 

        )
        
    }
}

export default App;