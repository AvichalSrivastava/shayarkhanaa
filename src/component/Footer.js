import React, {Component} from 'react';
class Footer extends Component
{
    render()
    {
        return(
            <div>
                    <footer className="row tm-row">
                        <hr className="col-12"/>
                        <div className="col-md-6 col-12 tm-color-gray">
                            Design: <a rel="nofollow" target="_parent" href="https://avichalsrivastava.in/" className="tm-external-link">ZigZager</a>
                        </div>
                        <div className="col-md-6 col-12 tm-color-gray tm-copyright">
                            Copyright 2020 are reserved.
                        </div>
                    </footer>
            </div>
        );
    }
}
export default Footer;