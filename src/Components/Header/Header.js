import React from 'react';
import Typed from 'react-typed';
import pic from './../../pic1.png'
import './Header.css'

const Header = () => {
    const styles = {
        root: {
            fontFamily: "sans-serif",
            textAlign: "center",
            height: "100vh",
            background: "#000",
            display: "flex",
        }
    };

    return (
        <div className="backgroundDesign mx-auto" style={{ background:"#556b05"}}>
            <div className='row w-100' >
                <div className='container col-md-5 text-center text-warning d-flex flex-column justify-content-center  animate__animated animate__bounceInLeft'>
                <h1>This is <span style={{color:"aqua"}}>Piyal Das</span></h1>
                <Typed style={{fontSize:"1.5rem"}}
                    strings={['I am a FrontEnd Web Developer', 'I am a Programmer', 'I am a Quick Learner']}
                    typeSpeed={50}
                    backSpeed={50}
                    fontSize={30}
                    loop 
                />
                <br/>
                <div className="d-flex justify-content-center ">
                <a href="https://www.linkedin.com/in/piyal-das-00a5a91b9/" target="_blank"><button className="btn btn-info m-1" style={{color:"#05386B"}}>Hire Me</button></a>
                <a href="https://resume.io/r/7bDIFKb7U"  target="_blank"><button className="btn btn-info m-1" style={{color:"#05386B"}}>Resume</button></a>
                </div>

                </div>
                <div className='col-md-5 p-4 animate__animated animate__bounceInRight d-flex justify-content-center' >
                    <img className="" style={{border: '3px solid #7b9095', borderRadius:"50%", width:'250px'}} src={pic} alt=""/>

                </div>
            </div>
        </div>
    );
};

export default Header;