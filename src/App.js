import React, {Component} from 'react';
//material ui component import
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import Body from './components/Body';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import RebrandlyLink from './components/RebrandlyLink';
import LinkCreate from './components/LinkCreate';
import EditLink from './components/EditLink';


class App extends Component{
    render(){
        return(
            <MuiThemeProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path = "/login" component={Login} />
                        <Route path = "/dashboard" component={RebrandlyLink} />
                        <Route path = "/table" component = {Body} />
                        <Route path="/linksnew" component={LinkCreate} />
                        <Route path = "/links/:id/edit" component={EditLink} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider> 

        )
        
    }
}

export default App;