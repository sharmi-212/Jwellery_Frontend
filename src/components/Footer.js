import React from 'react';
import './foo.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container1">
                <div className="row">
                    <div className="col-md-4">
                        <h2>About Us</h2>
                        <p>The aim of the company is to provide good quality products. The product range includes Electronics like Televisions, Refrigerators, Air conditioners, Washing Machines, and furniture like Cupboards, Sofa, etc. 
        </p>
        <br></br>
        <a href=""><InstagramIcon/></a>
        <a href="" style={{ marginLeft: '15px' }}><FacebookIcon /></a>
        <a href="" style={{ marginLeft: '15px' }}><GitHubIcon /></a>
        <a href="" style={{ marginLeft: '15px' }}><YouTubeIcon /></a>
        </div>
                    <div className="col-md-6">
                        <h2>Quick Links</h2>
                        
                            <Link to="/home">Home</Link>
                            <br></br>
                            <br></br>
                            <Link to="/pro">Products</Link>
                            <br></br>
                            <br></br>
                            <Link to="/cart">cart</Link>
                            <br></br>
                            <br></br>
                            <Link to="/login">Login</Link>
                        
                    </div>
                    <div className="col-md-4">
                        <h2>Contact Information</h2>
                        <p><i className="fas fa-map-marker-alt"></i> 123 Main Street, Cityville, State, 12345</p>
                        <p><i className="fas fa-phone"></i> 93446-7890</p>
                        <p><i className="fas fa-envelope"></i> supreme@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">&copy; 2023 Your Company Name. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
