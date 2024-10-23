import React from "react";
import './layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



const Footer = () => {
    return (

        <>
            <div className="footer-component">
                <section className="section">
                    <div className="membership-footer-section">
                        <h1 className="display-1">
                            Sign up for membership
                        </h1>
                        <button>
                            Join now
                        </button>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li>Blog</li>
                                <li>Media</li>
                                <li>Contact</li>
                                <li>Overview</li>
                                <li>Mental Health</li>

                            </ul>

                        </div>
                        <div className="col">
                            <div className="social-icons">

                            </div>

                        </div>

                    </div>


                </section>

            </div>
        </>

    );
}
export default Footer;