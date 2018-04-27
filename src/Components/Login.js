import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import Done from 'material-ui/svg-icons/communication/vpn-key';
const style = {
    margin: 12,
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
    fetch('https://api.rebrandly.com/v1/account',
{
    headers: {
        apikey: this.state.apikey
    }
})
.then(response => {
    if(response.ok) {
        response.json()
        .then(data => {
            console.log(data)
            if(data.email ===this.state.email){
                console.log("Right User")
            }
            else{
                alert("Not authorized user")
            }
        })
    }
  
    else{
        alert(response.statusText)
    }
    })
   
}

}


export default Login;