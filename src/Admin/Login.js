import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AdminPannel from './AdminPannel';
import CryptoJS from 'crypto-js';
import Spinner from 'react-bootstrap/Spinner'
export default class Login extends Component
{
    constructor(props) {
        super(props);
        this.state=({user:'',passward:'',login:false,adminData:'', loading:false, message:''});
    }
    
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    componentDidMount()
    {
       this.renderButton();
    }


    async onLogin()
    {
        this.setState({loading:true,message:"..Logging in!!"});
        var encrypted = CryptoJS.AES.encrypt(this.state.passward,'shrutika').toString();
        const post =
        {
            'user': this.state.user,
            'password':encrypted.toString()
        };
        try
        {
            var baseUrl = 'https://purva.herokuapp.com/'
            var response = await axios.post(baseUrl+'api/v1/login',post,{headers:{
                'Content-Type': 'application/json'
              }});
            
            if(response.status === 200 && response!=null)
            {
                this.setState({loading:false});
                var adminData = response.data.data;
                this.setState({login:true, message:response.data.message,adminData});
            }
            else
            {
                this.setState({loading:false});
                this.setState({login:false, message:response.data.message});
            }
        }
        catch(e)
        {
            this.setState({loading:false});
            this.setState({login:false, message:''});
            console.log("error",e);
        }
    }
   
    renderButton()
    {
        if(this.state.loading)
        {
            return<div style={{textAlign: '-webkit-center'}}><Spinner animation="border" role="status" role="status" aria-hidden="false"/></div>;
        }
        else
        {
            return(
            <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <i className="login100-form-btn" onClick={this.onLogin.bind(this)}>
                        Login
                    </i>
                </div>
            </div>);
        }
    }

    renderLogin()
    {
        if(this.state.login)
        {
            return(<AdminPannel adminData={this.state}/>);
        }
        else
        {
            return(<div>
                <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" method="GET">
                            <span className="login100-form-title p-b-26">
                                Welcome
                            </span>
                            <span className="login100-form-title p-b-48">
                                <i className="zmdi zmdi-font"></i>
                            </span>

                            <div className="wrap-input100 validate-input">
                                <input className="input100" type="text" name="user" value={this.state.user} onChange={this.handleChange} required/>
                                <span className="focus-input100" data-placeholder="user"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"></i>
                                </span>
                                <input className="input100" type="password" name="passward" value={this.state.password} onChange={this.handleChange}/>
                                <span className="focus-input100" data-placeholder="Password"></span>
                            </div>
                            {this.renderButton()}
                        </form>
                            <p>{this.state.message}</p>
                    </div>
                </div>
            </div>
            <div id="dropDownSelect1"></div>
            </div>);
        }
    }
    render()
    {
        return(
        <div>
            {this.renderLogin()}
        </div>);
    }
}