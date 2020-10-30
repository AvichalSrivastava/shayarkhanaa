import React, {Component} from 'react';
import Main from './Main';

class ContactUs extends Component
{
    render()
    {
        return(<div>
            <Main>
            <div className="row tm-row tm-mb-120">
                <div className="col-12">
                    <h2 className="tm-color-primary tm-post-title tm-mb-60">Contact Us</h2>
                </div>
                <div className="col-lg-7 tm-contact-left">
                    <form method="POST" action="mailto:avichalsrivastava78@gmail.com" enctype="text/plain"className="mb-5 ml-auto mr-0 tm-contact-form">                        
                        <div className="form-group row mb-4">
                            <label for="name" className="col-sm-3 col-form-label text-right tm-color-primary">Name</label>
                            <div className="col-sm-9">
                                <input className="form-control mr-0 ml-auto" name="name" id="name" type="text" required/>                            
                            </div>
                        </div>
                        <div className="form-group row mb-4">
                            <label for="email" className="col-sm-3 col-form-label text-right tm-color-primary">Email</label>
                            <div className="col-sm-9">
                                <input className="form-control mr-0 ml-auto" name="email" id="email" type="email" required/>
                            </div>
                        </div>
                        <div className="form-group row mb-4">
                            <label for="subject" className="col-sm-3 col-form-label text-right tm-color-primary">Subject</label>
                            <div className="col-sm-9">
                                <input className="form-control mr-0 ml-auto" name="subject" id="subject" type="text" required />
                            </div>
                        </div>
                        <div className="form-group row mb-5">
                            <label for="message" className="col-sm-3 col-form-label text-right tm-color-primary">Message</label>
                            <div className="col-sm-9">
                                <textarea className="form-control mr-0 ml-auto" name="message" id="message" rows="8" required></textarea>                                
                            </div>
                        </div>
                        <div className="form-group row text-right">
                            <div className="col-12">
                               <button className="tm-btn tm-btn-primary tm-btn-small">Submit</button>                   
                            </div>                            
                        </div>                                
                    </form>
                </div>
                <div className="col-lg-5 tm-contact-right">
                    <address className="mb-4 tm-color-gray">
                        120 Lorem ipsum dolor sit amet,
                        consectetur adipiscing 10550
                    </address>
                    <span className="d-block">
                        Tel:
                        <a href="tel:060-070-0980" className="tm-color-gray">060-070-0980</a>
                    </span>
                    <span className="mb-4 d-block">
                        Email:
                        <a href="mailto:info@company.com" className="tm-color-gray">info@company.com</a>
                    </span>
                    <p className="mb-5 tm-line-height-short">
                        Maecenas eu mi eu dui cursus
                        consequat non eu metus. Morbi ac
                        turpis eleifend, commodo purus
                        eget, commodo mauris.
                    </p>
                </div>
            </div>
            <script src="js/jquery.min.js"></script>
            <script src="js/templatemo-script.js"></script>
            </Main>
            </div>);
    }
}
export default ContactUs;