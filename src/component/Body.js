import React, {Component} from 'react';
import CardSection from '../Common/CardSection';
import common from './common.css';
import Main from './Main';
import axios from 'axios';
import About from './About';
class Body  extends Component
{
    constructor(props) {
        super(props);
        this.state = {page:1, totalPages:1};
    }

    
    componentDidMount() 
    {
        this.getPostData();
    }
    async getPostData()
    {

        try
        {

            var response = await axios.post('https://purva.herokuapp.com/api/v1/fetchpost/page',{pg:this.state.page.toString()});
           if(response.status === 200)
            {
                var posts = response.data.docs;
                this.setState({
                    Posts : posts.reverse().map((post) => (
                      <CardSection i={ Math.floor(Math.random() * 300) + 1} h={post.heading} c={post.content} d={post.date}/>
                    ))
                });
                this.setState({totalPages: response.data.totalPages});
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }

    render()
    {
      
        return(
            <Main>
            <div>
                <div>
                    <div className="row tm-row">
                    <div className="col-12">
                                <form method="GET" className="form-inline tm-mb-80 tm-search-form">                
                                    <input className="form-control tm-search-input" name="query" type="text" placeholder="Search..." aria-label="Search"/>
                                    <button className="tm-search-button" type="submit">
                                        <i className="fas fa-search tm-search-icon" aria-hidden="true"></i>
                                    </button>                                
                                </form>
                            </div>                    
                    </div>            
                    <div className="row">
                        {this.state.Posts}
                    </div>
                </div>
               <div className="paging">
               <a href="#" className="previous round" onClick={async()=>
                {
                    if(this.state.page > 1 )
                    {
                        this.state.page--;
                        await this.getPostData();
                    }
                }}>&#8249;</a>
                <a href="#" className="next round" onClick={async()=>
                    {
                        if(this.state.page != this.state.totalPages)
                        {
                            this.state.page++;
                            await this.getPostData();
                        }
                    }}>&#8250;</a>
               </div>
            </div>
            </Main>
        );
    }
}
export default Body;