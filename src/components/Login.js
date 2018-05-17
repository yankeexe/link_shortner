import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import Done from 'material-ui/svg-icons/communication/vpn-key';
import RebrandlyApi from '../services/RebrandlyApi';
const style = {
    margin: 12
  };


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            apikey: ''
        }
    }
    alignCenter = {
        height: "100vh",
        display: "flex",   
        justifyContent: "center", 
        alignItems: "center"
    }

    cardWidth = {
        width: "500px"
    }

    render() {
        return(
             <div style={this.alignCenter}>
                
               <Card style= {this.cardWidth} > 
                    <TextField
                    hintText="Enter you email"
                    floatingLabelText="Email"
                    type="email"
                    value={this.state.email}
                    onChange={(e) => this.onEmailChange(e)}
                    />

                    <br />
                    <br />
                   

                    <TextField
                    hintText="Enter your API Key"
                    type="password"
                    floatingLabelText="API Key"
                    value={this.state.apikey}
                    onChange={(e) => this.onApikeyChange(e)}
                    />

                    <br />

                    <RaisedButton label="Login" primary={true} style={style}
                    icon= {<Done />}
                    labelPosition="before"
                    onClick={() => this.onSubmit()}
                 />

                 </Card>   
        </div>
        )
    };
    
    onEmailChange(e) {
        this.setState({email: e.target.value})
    }

    onApikeyChange(e){
    this.setState({apikey: e.target.value})
    }

onSubmit(){
    this.getAccountDetails(this.state.apikey)
    .then(account => {
        if(account.email === this.state.email){
            sessionStorage.setItem('apikey', this.state.apikey)
            sessionStorage.setItem('email', this.state.email)
            this.props.history.push('/dashboard')
        }
        else{
            alert("Credential Mismatch")
        }
    })
    .catch(error => {
        alert(error.message)
    })
}

getAccountDetails(apikey){
    return RebrandlyApi.get('/account',{headers: {apikey: apikey}})
}

//component pachi mount huney cha, tara tyo bhanda agadi k check garney?
    componentWillMount(){

        const savedApikey = sessionStorage.getItem("apikey")

        if(savedApikey){
            this.getAccountDetails(savedApikey)
            .then(response => {
                if(response.ok) {
                    this.props.history.push('/dashboard')
                }
            })
            .catch(error => {
                sessionStorage.removeItem('apikey')
            })
        } else {
            this.props.history.push('/login')

        }
    }
}

export default Login;