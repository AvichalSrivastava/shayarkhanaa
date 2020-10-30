import React ,{Component} from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'

export default class AdminPannel extends Component
{
    constructor(props) {
        super(props);
        this.state=({heading:'',content:'', loading:false,message:''});
    }

    componentDidMount()
    {
        this.renderButton();
        this.setState(this.props.adminData);
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
        console.log("state",this.state);
        
    };
    async upload()
    {
        this.setState({loading:true});
        const post =
        {
            'heading': this.state.heading,
            'content':this.state.content
        };
        try
        {
            var response = await axios.post('https://purva.herokuapp.com/api/v1/dailyPost',post,{headers:{
                'Content-Type': 'application/json'
              }});
            
            if(response.status === 200)
            {
                this.setState({loading:false});
                var Data = response.data;
                this.setState({login:true, Data});
                if(Data!=null)
                {
                    console.log("Successfully posted");
                    this.setState({content:'',heading:'',message:"Successfully Posted"});
                }
                else
                {
                    this.setState({message:"Failed to post"});
                }

            }
        }
        catch(e)
        {
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
            <div className="form-group row text-right">
                <div className="col-12">
                <a className="tm-btn tm-btn-primary tm-btn-small" style={{color:'white'}} onClick={this.upload.bind(this)}>Post Now</a>                   
                </div>                            
            </div>);
        }
    }

    Logout()
    {
        console.log("Logged Out!!");
        this.setState({login:false});
        this.setState({message:"...Logging off"});
        window.location.reload(false);
    }
    render()
    {
        console.log(this.props.adminData);
       return(<div style={{textAlign: '-webkit-center'}}>
            <div style={{justifyContent: 'center',textAlign: '-webkit-center'}} className="row tm-row tm-mb-120">
                <div className="col-12">
                    <h2 className="tm-color-primary tm-post-title tm-mb-60">Admin</h2>
                    <a className="tm-btn tm-btn-primary tm-btn-small" style={{color:'white'}} onClick={this.Logout.bind(this)}>Logout</a>
                </div>
                <div className="col-lg-7 tm-contact-left">
                <p>{this.state.message}</p>
                    <form className="mb-5 ml-auto mr-0 tm-contact-form" method="GET">                        
                        <div className="form-group row mb-4">
                            <label for="name" className="col-sm-3 col-form-label text-right tm-color-primary">Heading</label>
                            <div className="col-sm-9">
                                <input className="form-control mr-0 ml-auto" name="heading" id="name" type="text" value={this.state.heading} onChange={this.handleChange} required/>                            
                            </div>
                        </div>
                        <div className="form-group row mb-5">
                            <label for="message" className="col-sm-3 col-form-label text-right tm-color-primary">Content</label>
                            <div className="col-sm-9">
                                <textarea className="form-control mr-0 ml-auto" name="content" id="message" rows="8" value={this.state.content} onChange={this.handleChange} required></textarea>                                
                            </div>
                        </div>
                           {this.renderButton()}                          
                    </form>
                       
                </div>
               
            </div>
            <script src="js/jquery.min.js"></script>
            <script src="js/templatemo-script.js"></script>
        </div>);
    }
}