import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
class Main extends Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <div className="container-fluid">
                    <main className="tm-main">
                    {this.props.children}
                    </main>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Main;